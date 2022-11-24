"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = __importDefault(require("../controller/ProfileController"));
class ProfileRoute {
    constructor() {
        this.apiRouteProfile = (0, express_1.Router)();
        this.LoadRoutes();
    }
    LoadRoutes() {
        this.apiRouteProfile.get("/getAll", ProfileController_1.default.Consult);
        this.apiRouteProfile.post("/postCreate", ProfileController_1.default.Create);
        this.apiRouteProfile.delete("/delete/:myIdentifier", ProfileController_1.default.Delete);
        this.apiRouteProfile.put("/update/:myIdentifier", ProfileController_1.default.Update);
    }
}
;
const profileRoute = new ProfileRoute();
exports.default = profileRoute.apiRouteProfile;
