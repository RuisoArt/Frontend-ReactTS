import avionController from "../controller/AvionController";
import { Router} from "express";

class AvionRoute{
    public apiRouteAvion: Router;

    constructor() {
        this.apiRouteAvion = Router();
        this.LoadRoutes();
    }

    public LoadRoutes(): void{
        this.apiRouteAvion.get("/getAll", avionController.Consult);
        this.apiRouteAvion.get("/getOne/:codigo", avionController.ConsultfindOne);
        this.apiRouteAvion.post("/postCreate", avionController.Create);
        this.apiRouteAvion.delete("/delete/:myIdentifier", avionController.Delete);
        this.apiRouteAvion.put("/update/:myIdentifier", avionController.Update);
    }
};

const avionRoute = new AvionRoute();
export default avionRoute.apiRouteAvion;