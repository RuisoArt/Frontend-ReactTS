"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvionController_1 = __importDefault(require("../controller/AvionController"));
const express_1 = require("express");
class AvionRoute {
    constructor() {
        this.apiRouteAvion = (0, express_1.Router)();
        this.LoadRoutes();
    }
    LoadRoutes() {
        this.apiRouteAvion.get("/getAll", AvionController_1.default.Consult);
        this.apiRouteAvion.get("/getOne/:codigo", AvionController_1.default.ConsultfindOne);
        this.apiRouteAvion.post("/postCreate", AvionController_1.default.Create);
        this.apiRouteAvion.delete("/delete/:myIdentifier", AvionController_1.default.Delete);
        this.apiRouteAvion.put("/update/:myIdentifier", AvionController_1.default.Update);
    }
}
;
const avionRoute = new AvionRoute();
exports.default = avionRoute.apiRouteAvion;
