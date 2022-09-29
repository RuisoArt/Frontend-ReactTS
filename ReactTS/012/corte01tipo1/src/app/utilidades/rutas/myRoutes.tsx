import {Route, Routes} from "react-router-dom";
import { Catalogue } from "../../componentes/Catalogue";
import { Create } from "../../componentes/Create";
import { Edit } from "../../componentes/Edit";
import { Welcome } from "../../componentes/Welcome";


export const MyRoutes = ()=>{
    /*
        Uno para pagina por defecto
        uno para catalogo
        Uno para crear
    */
    return(
        <Routes>
            <Route path = "/" element = {<Welcome/>}/>
            <Route path = "/catalogo" element = {<Catalogue/>}/>
            <Route path = "/create" element = {<Create/>}/> 
            <Route path = "/edit" element = {<Edit/>}/>
        </Routes>
    )
};