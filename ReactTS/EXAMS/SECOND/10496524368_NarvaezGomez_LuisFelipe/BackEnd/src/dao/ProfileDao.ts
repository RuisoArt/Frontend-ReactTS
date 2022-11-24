import {Response, Request} from "express";
import ProfileScheme from "../scheme/ProfileScheme";

class ProfileDao {
    // Devuelve Perfiles
    protected static async ConsultProfile(res: Response): Promise<any> {
        const datos = await ProfileScheme.aggregate([
            { $lookup: { from: "Usuario", localField: "_id", foreignField: "codPerfil", as: "cantidadUsuarios" } },
            { $addFields: { cantidadUsuarios: { $size: "$cantidadUsuarios" } } }
        ]).sort({ _id: 1 });
        res.status(200).json(datos);
    }
    protected static async consultarUnPerfil(identificador: any, res: Response): Promise<any> {
        const jsonPerfil = { _id: identificador };
        const existePerfil = await ProfileScheme.findOne(jsonPerfil).exec();
        if (existePerfil) {
            res.status(200).json(existePerfil);
        } else {
            res.status(400).json({ respuesta: "El perfil NO existe con ese identificador" });
        }
    }

    // Crea perfiles
    protected static async CreateProfile(parameters: any, res: Response): Promise<any> {
        console.log(parameters);
        const exists = await ProfileScheme.findOne(parameters).exec();
        console.log(exists);

        if(exists) {
            res.status(400).json({respuesta: "El nombre de perfil ya existe"});
        } else{
            const myProfile = new ProfileScheme(parameters);
            myProfile.save((myError, theObject) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo grabar el nuevo perfil"});
                }else{
                    res.status(200).json({respuesta: "El perfil nuevo fue creado con exito", id: theObject._id});
                }
            });
        }
    }
    // Eliminar perfiles
    protected static async DeleteProfile(identifier: any, res: Response): Promise<any> {
        const exists = await ProfileScheme.findById(identifier).exec();
        if(exists) {
            ProfileScheme.findByIdAndDelete(identifier, (myError: any, theObject: any) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo eliminar el perfil"});
                }else{
                    res.status(200).json({respuesta: "Perfil Eliminado con exito", id: theObject});
                }
            });
            
        } else{
            res.status(404).json({respuesta: "No existe el perfil que me dices"});
        }
    }
    // Actualizar perfiles
    protected static async UpdateProfile(identifier: any, myJson:any, res: Response): Promise<any> {
        const exists = await ProfileScheme.findById(identifier).exec();
        if(exists) {
            ProfileScheme.findByIdAndUpdate(
                {_id: identifier},
                {$set: myJson},
                 (myError: any, theObject: any) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo actualizar el perfil"});
                }else{
                    res.status(200).json({respuesta: "Perfil Actualizado con exito", before: theObject, after: myJson});
                }
            });
            
        } else{
            res.status(404).json({respuesta: "No existe el perfil que me dices"});
        }
    }

};

export default ProfileDao;