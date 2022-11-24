import {useState, ChangeEvent} from "react";

export const useFormulario =<T extends Object>(objetoInicial: T)=>{
    const [object, setObject] = useState(objetoInicial);

    const doubleLink = ({target}:ChangeEvent<any>) =>{
        const {name, value} = target;
        setObject({
            ...object,
            [name]: value
        });
    };

    return{
        object,
        doubleLink,
        ...object,
    };
};