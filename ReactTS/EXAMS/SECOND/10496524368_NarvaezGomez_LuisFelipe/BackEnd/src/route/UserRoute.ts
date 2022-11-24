import { Router} from "express";
import userController from "../controller/UserController";

class UserRoute{
    public apiRouteUser: Router;

    constructor() {
        this.apiRouteUser = Router();
        this.LoadRoutes();
    }

    public LoadRoutes(): void{
        this.apiRouteUser.post("/init", userController.Verify);
        this.apiRouteUser.get("/getAll", userController.Consult);
        this.apiRouteUser.post("/postCreate", userController.Create);
        this.apiRouteUser.delete("/delete/:myIdentifier", userController.Delete);
        this.apiRouteUser.put("/update/:myIdentifier", userController.Update);
    }

};

const userRoute =  new UserRoute();
export default userRoute.apiRouteUser;