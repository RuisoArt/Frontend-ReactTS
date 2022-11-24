"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../dao/UserDao"));
class UserController extends UserDao_1.default {
    // verificar sesion
    Verify(req, res) {
        UserController.verifyUser(req.body, res);
    }
    // Obtienen los perfiles
    Consult(req, res) {
        UserController.ConsultUser(res);
    }
    // Crear un perfil
    Create(req, res) {
        const email = { emailUser: req.body.emailUser };
        UserController.CreateUser(email, req.body, res);
    }
    // Eliminar perfiles
    Delete(req, res) {
        UserController.DeleteUser(req.params.myIdentifier, res);
    }
    // Actualizar Perfiles
    Update(req, res) {
        UserController.UpdateUser(req.params.myIdentifier, req.body, res);
    }
}
;
const userController = new UserController();
exports.default = userController;
