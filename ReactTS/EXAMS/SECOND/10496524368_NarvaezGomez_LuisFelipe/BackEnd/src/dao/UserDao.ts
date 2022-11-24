import {Response, Request} from "express";
import ProfileScheme from "../scheme/ProfileScheme";
import UserScheme from "../scheme/UserScheme";
import jwt from "jsonwebtoken";
import encryptTheKEY from "bcryptjs";

class UserDao {
    //
    protected static async verifyUser(params: any, res: Response){
        const theEmail = params.emailUser;
        const thePassword = params.passUser;

        //populate trae toda la informacion pertinente del usuario por su id Profile
        UserScheme.findOne({emailUser: theEmail})
        .populate("idProfile")
        .exec((myError, myObject) => {
            if (myObject) {
                const dasPassGut = encryptTheKEY.compareSync(thePassword, myObject.passUser);
                if(dasPassGut){
                    const myPayload = {
                        codUser: myObject._id,
                        profile: myObject.idProfile.profileName
                    };
                    const myKey = String(process.env.PASSWORD_SECRET);
                    const myToken = jwt.sign(myPayload, myKey, {expiresIn:86400})
                    res.status(200).json({tokenUSTA: myToken});
                }else{
                    res.status(400).json({respuesta: "Credenciales NO validas"})       
                }
            } else {
                res.status(400).json({respuesta: "Credenciales NO validas, CERO"})   
            }
        });
    }

    // Devuelve Usuarios
    protected static async ConsultUser(res: Response): Promise<any> {
        const myUsers = await UserScheme.find().sort({_id: -1}); //-1=>descendente 1=>ascending
        res.status(200).json(myUsers);
    }
    // Crea Usuarios
    protected static async CreateUser( email: any, parameters: any, res: Response): Promise<any> {
        // perfil por defecto
        const default_profile = String(process.env.DEFAULT_PROFILE);
        const json_profile = {profileName: default_profile};
        const exist_profile = await ProfileScheme.findOne(json_profile);
        if (exist_profile){
            parameters.idProfile = exist_profile._id;
        }else{
            const create_profile = new ProfileScheme(json_profile);
            create_profile.save();
            parameters.idProfile = create_profile._id;
        }

        // crear e perfil 
        const exists = await UserScheme.findOne(email).exec();
        if(exists) {
            res.status(400).json({respuesta: "El correo ya existe"});
        } else{

            parameters.passUser = encryptTheKEY.hashSync(parameters.passUser, 10);
            const myUser = new UserScheme(parameters);
            
            myUser.save((myError, theObject) => {
                if(myError){
                    console.log(myError);
                    console.log(parameters);
                    res.status(400).json({respuesta: "No se pudo grabar el nuevo correo"});
                }else{
                    const myPayload = {
                        codUser : theObject._id,
                        email : parameters.email
                    };
                    const myKey = String(process.env.PASSWORD_SECRET);
                    const myToken = jwt.sign(myPayload, myKey, {expiresIn:86400})
                    res.status(200).json({tokenUSTA: myToken});
                }
            });
        }
    }
    // Eliminar Usuarios
    protected static async DeleteUser(identifier: any, res: Response): Promise<any> {
        const exists = await UserScheme.findById(identifier).exec();
        if(exists) {
            UserScheme.findByIdAndDelete(identifier, (myError: any, theObject: any) => {
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
    // Actualizar Usuarios
    protected static async UpdateUser(identifier: any, myJson:any, res: Response): Promise<any> {
        const exists = await UserScheme.findById(identifier).exec();
        if(exists) {
            UserScheme.findByIdAndUpdate(
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

export default UserDao;