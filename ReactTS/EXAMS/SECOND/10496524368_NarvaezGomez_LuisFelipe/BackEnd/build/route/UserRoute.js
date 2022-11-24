"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRoute {
    constructor() {
        this.apiRouteUser = (0, express_1.Router)();
        this.LoadRoutes();
    }
    LoadRoutes() {
        this.apiRouteUser.post("/init", UserController_1.default.Verify);
        this.apiRouteUser.get("/getAll", UserController_1.default.Consult);
        this.apiRouteUser.post("/postCreate", UserController_1.default.Create);
        this.apiRouteUser.delete("/delete/:myIdentifier", UserController_1.default.Delete);
        this.apiRouteUser.put("/update/:myIdentifier", UserController_1.default.Update);
    }
}
;
const userRoute = new UserRoute();
exports.default = userRoute.apiRouteUser;
