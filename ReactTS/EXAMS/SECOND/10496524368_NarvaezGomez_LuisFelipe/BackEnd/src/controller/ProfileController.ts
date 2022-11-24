import { Response, Request } from "express";
import ProfileDao from "../dao/ProfileDao";

class ProfileController extends ProfileDao {
    // Obtienen los perfiles
    public Consult(req: Request, res: Response) : void {
        ProfileController.ConsultProfile(res);
    }
    // obtiene un perfil
    public ConsultfindOne(req: Request, res: Response) : void {
        ProfileController.consultarUnPerfil(req.params.codigo, res);
    }
    // Crear un perfil
    public Create(req: Request, res: Response) : void {
        ProfileController.CreateProfile(req.body, res);
    }
    // Eliminar perfiles
    public Delete(req: Request, res: Response) : void {
        ProfileController.DeleteProfile(req.params.myIdentifier, res);
    }
    // Actualizar Perfiles
    public Update(req: Request, res: Response) : void {
        ProfileController.UpdateProfile(req.params.myIdentifier, req.body, res);
    }
};

const profileController = new ProfileController();
export default profileController;
