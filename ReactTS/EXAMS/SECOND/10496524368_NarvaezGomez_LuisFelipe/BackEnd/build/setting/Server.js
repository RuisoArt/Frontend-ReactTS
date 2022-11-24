"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors")); // para conexion a la aplicacion
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const conecctionDB_1 = __importDefault(require("./conecctionDB"));
// import rutas
const ProfileRoute_1 = __importDefault(require("../route/ProfileRoute"));
const AvionRoute_1 = __importDefault(require("../route/AvionRoute"));
const UserRoute_1 = __importDefault(require("../route/UserRoute"));
const Security_1 = __importDefault(require("../middleware/Security"));
class Server {
    constructor() {
        dotenv_1.default.config({ path: "Variables.env" });
        (0, conecctionDB_1.default)();
        this.app = (0, express_1.default)();
        this.loadSettings();
        this.loadRoutes();
    }
    ;
    loadSettings() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "20mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    loadRoutes() {
        //this.app.use("/api/public/profiles", ProfileRoute);
        this.app.use("/api/public/users", UserRoute_1.default);
        this.app.use("/api/private/profiles", Security_1.default.verificarToken, ProfileRoute_1.default);
        this.app.use("/api/private/aviones", Security_1.default.verificarToken, AvionRoute_1.default);
    }
    initBackend() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Server initialized mother fucker! in: ", this.app.get("PORT"));
        });
    }
}
;
exports.default = Server;
