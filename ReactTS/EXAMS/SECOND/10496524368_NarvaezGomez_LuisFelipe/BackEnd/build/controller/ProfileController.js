"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileDao_1 = __importDefault(require("../dao/ProfileDao"));
class ProfileController extends ProfileDao_1.default {
    // Obtienen los perfiles
    Consult(req, res) {
        ProfileController.ConsultProfile(res);
    }
    // obtiene un perfil
    ConsultfindOne(req, res) {
        ProfileController.consultarUnPerfil(req.params.codigo, res);
    }
    // Crear un perfil
    Create(req, res) {
        ProfileController.CreateProfile(req.body, res);
    }
    // Eliminar perfiles
    Delete(req, res) {
        ProfileController.DeleteProfile(req.params.myIdentifier, res);
    }
    // Actualizar Perfiles
    Update(req, res) {
        ProfileController.UpdateProfile(req.params.myIdentifier, req.body, res);
    }
}
;
const profileController = new ProfileController();
exports.default = profileController;
