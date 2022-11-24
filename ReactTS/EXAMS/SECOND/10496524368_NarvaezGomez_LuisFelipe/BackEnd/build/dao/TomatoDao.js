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
const AvionScheme_1 = __importDefault(require("../scheme/AvionScheme"));
class AvionDao {
    // Devuelve todos los Elementos
    static ConsultElement(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield AvionScheme_1.default.aggregate([
                { $lookup: { from: "Avion", localField: "_id", foreignField: "codAvion", as: "cantidadAviones" } },
                { $addFields: { cantidadAviones: { $size: "$cantidadAviones" } } }
            ]).sort({ _id: 1 });
            res.status(200).json(datos);
        });
    }
    // Devuelve un Elemento
    static ConsultOneElement(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonElement = { _id: identificador };
            const existElement = yield AvionScheme_1.default.findOne(jsonElement).exec();
            if (existElement) {
                res.status(200).json(existElement);
            }
            else {
                res.status(400).json({ respuesta: "Este elemento NO existe con ese identificador" });
            }
        });
    }
    // Crea un Elemento
    static CreateElement(parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(parameters);
            const exists = yield AvionScheme_1.default.findOne(parameters).exec();
            console.log(exists);
            if (exists) {
                res.status(400).json({ respuesta: "El nombre del elemento ya existe" });
            }
            else {
                const myElement = new AvionScheme_1.default(parameters);
                myElement.save((myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo grabar el nuevo elemento" });
                    }
                    else {
                        res.status(200).json({ respuesta: "El elemento nuevo fue creado con exito", id: theObject._id });
                    }
                });
            }
        });
    }
    // Eliminar un Elemento
    static DeleteElement(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield AvionScheme_1.default.findById(identifier).exec();
            if (exists) {
                AvionScheme_1.default.findByIdAndDelete(identifier, (myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo eliminar el elemento" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Elemento Eliminado con exito", id: theObject });
                    }
                });
            }
            else {
                res.status(404).json({ respuesta: "No existe el elemento que me dices" });
            }
        });
    }
    // Actualizar un Elemento
    static UpdateElement(identifier, myJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield AvionScheme_1.default.findById(identifier).exec();
            if (exists) {
                AvionScheme_1.default.findByIdAndUpdate({ _id: identifier }, { $set: myJson }, (myError, theObject) => {
                    if (myError) {
                        console.log(myError);
                        res.status(400).json({ respuesta: "No se pudo actualizar el elemento" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Elemento Actualizado con exito", before: theObject, after: myJson });
                    }
                });
            }
            else {
                res.status(404).json({ respuesta: "No existe el elemento que me dices" });
            }
        });
    }
}
;
exports.default = AvionDao;
