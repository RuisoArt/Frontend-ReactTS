import {useState, ChangeEvent} from "react";

export const useFormulario =<T extends Object>(objetoInicial: T)=>{
    const [objeto, setObjecto] = useState(objetoInicial);

    const dobleEnlace = ({target}:ChangeEvent<any>) =>{
        const {name, value} = target;
        setObjecto({
            ...objeto,
            [name]: value
        });
    };

    return{
        objeto,
        dobleEnlace,
        ...objeto,
    };
};