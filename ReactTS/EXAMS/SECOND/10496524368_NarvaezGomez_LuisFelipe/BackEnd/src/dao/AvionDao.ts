import AvionScheme from "../scheme/AvionScheme";
import {Response, Request} from "express";

class AvionDao{
    // Devuelve todos los Elementos
    protected static async ConsultElement(res: Response): Promise<any> {
        const datos = await AvionScheme.aggregate([
            { $lookup: { from: "Avion", localField: "_id", foreignField: "codAvion", as: "cantidadAviones" } },
            { $addFields: { cantidadAviones: { $size: "$cantidadAviones" } } }
        ]).sort({ _id: 1 });
        res.status(200).json(datos);
    }

    // Devuelve un Elemento
    protected static async ConsultOneElement(identificador: any, res: Response): Promise<any> {
        const jsonElement = { _id: identificador };
        const existElement = await AvionScheme.findOne(jsonElement).exec();
        if (existElement) {
            res.status(200).json(existElement);
        } else {
            res.status(400).json({ respuesta: "Este elemento NO existe con ese identificador" });
        }
    }

    // Crea un Elemento
    protected static async CreateElement(parameters: any, res: Response): Promise<any> {
        console.log(parameters);
        const exists = await AvionScheme.findOne(parameters).exec();
        console.log(exists);

        if(exists) {
            res.status(400).json({respuesta: "El nombre del elemento ya existe"});
        } else{
            const myElement = new AvionScheme(parameters);

            myElement.save((myError, theObject) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo grabar el nuevo elemento"});
                }else{
                    res.status(200).json({respuesta: "El elemento nuevo fue creado con exito", id: theObject._id});
                }
            });
        }
    }
    // Eliminar un Elemento
    protected static async DeleteElement(identifier: any, res: Response): Promise<any> {
        const exists = await AvionScheme.findById(identifier).exec();

        if(exists) {
            AvionScheme.findByIdAndDelete(identifier, (myError: any, theObject: any) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo eliminar el elemento"});
                }else{
                    res.status(200).json({respuesta: "Elemento Eliminado con exito", id: theObject});
                }
            });
            
        } else{
            res.status(404).json({respuesta: "No existe el elemento que me dices"});
        }
    }
    // Actualizar un Elemento
    protected static async UpdateElement(identifier: any, myJson:any, res: Response): Promise<any> {
        const exists = await AvionScheme.findById(identifier).exec();

        if(exists) {
            AvionScheme.findByIdAndUpdate(
                {_id: identifier},
                {$set: myJson},
                 (myError: any, theObject: any) => {
                if(myError){
                    console.log(myError);
                    res.status(400).json({respuesta: "No se pudo actualizar el elemento"});
                }else{
                    res.status(200).json({respuesta: "Elemento Actualizado con exito", before: theObject, after: myJson});
                }
            });
            
        } else{
            res.status(404).json({respuesta: "No existe el elemento que me dices"});
        }
    }
};

export default AvionDao;