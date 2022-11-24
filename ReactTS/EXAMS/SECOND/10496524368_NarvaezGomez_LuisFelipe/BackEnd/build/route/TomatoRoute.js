"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TomatoController_1 = __importDefault(require("../controller/TomatoController"));
const express_1 = require("express");
class TomatoRoute {
    constructor() {
        this.apiRouteTomato = (0, express_1.Router)();
        this.LoadRoutes();
    }
    LoadRoutes() {
        this.apiRouteTomato.get("/getAll", TomatoController_1.default.Consult);
        this.apiRouteTomato.get("/getOne/:codigo", TomatoController_1.default.ConsultfindOne);
        this.apiRouteTomato.post("/postCreate", TomatoController_1.default.Create);
        this.apiRouteTomato.delete("/delete/:myIdentifier", TomatoController_1.default.Delete);
        this.apiRouteTomato.put("/update/:myIdentifier", TomatoController_1.default.Update);
    }
}
;
const tomatoRoute = new TomatoRoute();
exports.default = tomatoRoute.apiRouteTomato;
