"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvionDao_1 = __importDefault(require("../dao/AvionDao"));
class AvionController extends AvionDao_1.default {
    // Obtienen los elementos
    Consult(req, res) {
        AvionController.ConsultElement(res);
    }
    // obtiene un elemento
    ConsultfindOne(req, res) {
        AvionController.ConsultOneElement(req.params.codigo, res);
    }
    // Crear un elemento
    Create(req, res) {
        AvionController.CreateElement(req.body, res);
    }
    // Elimina un elemento
    Delete(req, res) {
        AvionController.DeleteElement(req.params.myIdentifier, res);
    }
    // Actualiza un elemento
    Update(req, res) {
        AvionController.UpdateElement(req.params.myIdentifier, req.body, res);
    }
}
;
const avionController = new AvionController();
exports.default = avionController;
