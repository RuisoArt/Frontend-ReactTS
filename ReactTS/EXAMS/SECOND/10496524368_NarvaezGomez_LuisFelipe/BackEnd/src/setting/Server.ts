import cors from 'cors'; // para conexion a la aplicacion
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import conecctionDB from './conecctionDB';

// import rutas
import ProfileRoute from '../route/ProfileRoute'; 
import AvionRoute from '../route/AvionRoute';
import userRoute from '../route/UserRoute';
import seguridad from '../middleware/Security';

class Server{
    public app: express.Application;
    constructor(){
        dotenv.config({path:"Variables.env"});
        conecctionDB();
        this.app = express();
        this.loadSettings();
        this.loadRoutes();
    };

    public loadSettings(){
        this.app.set("PORT", process.env.PORT);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit:"20mb"}));
        this.app.use(express.urlencoded({extended:true}));
    }

    public loadRoutes(){
        //this.app.use("/api/public/profiles", ProfileRoute);
        this.app.use("/api/public/users", userRoute);
        this.app.use("/api/private/profiles", seguridad.verificarToken, ProfileRoute);
        this.app.use("/api/private/aviones", seguridad.verificarToken, AvionRoute);
    }

    public initBackend(){
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("Server initialized mother fucker! in: ", this.app.get("PORT"));
        })
    }
};

export default Server;
