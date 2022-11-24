import { Router} from "express";
import profileController from "../controller/ProfileController";

class ProfileRoute{
    public apiRouteProfile: Router;

    constructor() {
        this.apiRouteProfile = Router();
        this.LoadRoutes();
    }

    public LoadRoutes(): void{
        this.apiRouteProfile.get("/getAll", profileController.Consult);
        this.apiRouteProfile.post("/postCreate", profileController.Create);
        this.apiRouteProfile.delete("/delete/:myIdentifier", profileController.Delete);
        this.apiRouteProfile.put("/update/:myIdentifier", profileController.Update);
    }

};

const profileRoute =  new ProfileRoute();
export default profileRoute.apiRouteProfile;