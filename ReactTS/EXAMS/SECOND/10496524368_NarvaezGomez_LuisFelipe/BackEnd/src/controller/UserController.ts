import { Response, Request } from "express";
import UserDao from "../dao/UserDao";

class UserController extends UserDao {
    // verificar sesion
    public Verify(req: Request, res: Response):void{
        UserController.verifyUser(req.body, res);
    }
    // Obtienen los perfiles
    public Consult(req: Request, res: Response) : void {
        UserController.ConsultUser(res);
    }
    // Crear un perfil
    public Create(req: Request, res: Response) : void {
        const email = {emailUser:req.body.emailUser};
        UserController.CreateUser(email, req.body, res);
    }
    // Eliminar perfiles
    public Delete(req: Request, res: Response) : void {
        UserController.DeleteUser(req.params.myIdentifier, res);
    }
    // Actualizar Perfiles
    public Update(req: Request, res: Response) : void {
        UserController.UpdateUser(req.params.myIdentifier, req.body, res);
    }
};

const userController = new UserController();
export default userController;
