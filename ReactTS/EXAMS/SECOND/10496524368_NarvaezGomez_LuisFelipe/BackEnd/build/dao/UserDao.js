"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileScheme_1 = __importDefault(require("../scheme/ProfileScheme"));
const UserScheme_1 = __importDefault(require("../scheme/UserScheme"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserDao {
    //
    static verifyUser(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const theEmail = params.emailUser;
            const thePassword = params.passUser;
            //populate trae toda la informacion pertinente del usuario por su id Profile
            UserScheme_1.default.findOne({ emailUser: theEmail })
                .populate("idProfile")
                .exec((myError, myObject) => {
                if (myObject) {
                    const dasPassGut = bcryptjs_1.default.compareSync(thePassword, myObject.passUser);
                    if (dasPassGut) {
                        const myPayload = {
                            codUser: myObject._id,
                            profile: myObject.idProfile.profileName
                        };
                        const myKey = String(process.env.PASSWORD_SECRET);
                        const myToken = jsonwebtoken_1.default.sign(myPayload, myKey, { expiresIn: 86400 });
                        res.status(200).json({ tokenUSTA: myToken });
                    }
                    else {
                        res.status(400).json({ respuesta: "Credenciales NO validas" });
                    }
                }
                else {
                    res.status(400).json({ respuesta: "Credenciales NO validas, CERO" });
                }
            });
        });
    }
    // Devuelve Usuarios
    static ConsultUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const myUsers = yield UserScheme_1.default.find().sort({ _id: -1 }); //-1=>descendente 1=>ascending
            res.status(200).json(myUsers);
        });
    }
    // Crea Usuarios
    static CreateUser(email, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // perfil por defecto
            const default_profile = String(process.env.DEFAULT_PROFILE);
            const json_profile = { profileName: default_profile };
            const exist_profile = yield ProfileScheme_1.default.findOne(json_profile);
            if (exist_profile) {
                parameters.idProfile = exist_profile._id;
            }
            else {
                const create_profile = new ProfileScheme_1.default(json_profile);
                create_profile.save();
                parameters.idProfile = create_profile._id;
            }
            // crear e perfil 
            const exists = yield UserScheme_1.default.findOne(email).exec();
            if (exists) {
                res.status(400).json({ respuesta: "El correo ya existe" });
            }
            else {
                parameters.passUser = bcryptjs_1.default.hashSync(parameters.passUser, 10);
                const myUser = new UserScheme_1.default(parameters);
                myUser.save((myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        console.log(parameters);
                        res.status(400).json({ respuesta: "No se pudo grabar el nuevo correo" });
                    }
                    else {
                        const myPayload = {
                            codUser: theObject._id,
                            email: parameters.email
                        };
                        const myKey = String(process.env.PASSWORD_SECRET);
                        const myToken = jsonwebtoken_1.default.sign(myPayload, myKey, { expiresIn: 86400 });
                        res.status(200).json({ tokenUSTA: myToken });
                    }
                });
            }
        });
    }
    // Eliminar Usuarios
    static DeleteUser(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield UserScheme_1.default.findById(identifier).exec();
            if (exists) {
                UserScheme_1.default.findByIdAndDelete(identifier, (myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo eliminar el perfil" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Perfil Eliminado con exito", id: theObject });
                    }
                });
            }
            else {
                res.status(404).json({ respuesta: "No existe el perfil que me dices" });
            }
        });
    }
    // Actualizar Usuarios
    static UpdateUser(identifier, myJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield UserScheme_1.default.findById(identifier).exec();
            if (exists) {
                UserScheme_1.default.findByIdAndUpdate({ _id: identifier }, { $set: myJson }, (myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo actualizar el perfil" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Perfil Actualizado con exito", before: theObject, after: myJson });
                    }
                });
            }
            else {
                res.status(404).json({ respuesta: "No existe el perfil que me dices" });
            }
        });
    }
}
;
exports.default = UserDao;
