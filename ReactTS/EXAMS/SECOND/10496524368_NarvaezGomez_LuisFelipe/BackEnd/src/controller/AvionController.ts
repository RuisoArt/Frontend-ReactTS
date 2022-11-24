import AvionDao from "../dao/AvionDao";
import { Response, Request } from "express";

class AvionController extends AvionDao{
    // Obtienen los elementos
    public Consult(req: Request, res: Response) : void {
        AvionController.ConsultElement(res);
    }
    // obtiene un elemento
    public ConsultfindOne(req: Request, res: Response) : void {
        AvionController.ConsultOneElement(req.params.codigo, res);
    }
    // Crear un elemento
    public Create(req: Request, res: Response) : void {
        AvionController.CreateElement(req.body, res);
    }
    // Elimina un elemento
    public Delete(req: Request, res: Response) : void {
        AvionController.DeleteElement(req.params.myIdentifier, res);
    }
    // Actualiza un elemento
    public Update(req: Request, res: Response) : void {
        AvionController.UpdateElement(req.params.myIdentifier, req.body, res);
    }
};

const avionController = new AvionController();
export default avionController;