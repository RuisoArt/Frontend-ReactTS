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
class ProfileDao {
    // Devuelve Perfiles
    static ConsultProfile(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield ProfileScheme_1.default.aggregate([
                { $lookup: { from: "Usuario", localField: "_id", foreignField: "codPerfil", as: "cantidadUsuarios" } },
                { $addFields: { cantidadUsuarios: { $size: "$cantidadUsuarios" } } }
            ]).sort({ _id: 1 });
            res.status(200).json(datos);
        });
    }
    static consultarUnPerfil(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPerfil = { _id: identificador };
            const existePerfil = yield ProfileScheme_1.default.findOne(jsonPerfil).exec();
            if (existePerfil) {
                res.status(200).json(existePerfil);
            }
            else {
                res.status(400).json({ respuesta: "El perfil NO existe con ese identificador" });
            }
        });
    }
    // Crea perfiles
    static CreateProfile(parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(parameters);
            const exists = yield ProfileScheme_1.default.findOne(parameters).exec();
            console.log(exists);
            if (exists) {
                res.status(400).json({ respuesta: "El nombre de perfil ya existe" });
            }
            else {
                const myProfile = new ProfileScheme_1.default(parameters);
                myProfile.save((myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo grabar el nuevo perfil" });
                    }
                    else {
                        res.status(200).json({ respuesta: "El perfil nuevo fue creado con exito", id: theObject._id });
                    }
                });
            }
        });
    }
    // Eliminar perfiles
    static DeleteProfile(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield ProfileScheme_1.default.findById(identifier).exec();
            if (exists) {
                ProfileScheme_1.default.findByIdAndDelete(identifier, (myError, theObject) => {
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
    // Actualizar perfiles
    static UpdateProfile(identifier, myJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield ProfileScheme_1.default.findById(identifier).exec();
            if (exists) {
                ProfileScheme_1.default.findByIdAndUpdate({ _id: identifier }, { $set: myJson }, (myError, theObject) => {
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
exports.default = ProfileDao;
