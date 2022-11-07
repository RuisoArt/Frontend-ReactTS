import {Route, Routes} from "react-router-dom";
import { Catalogue } from "../../components/CRUD/Catalogue";
import { Create } from "../../components/CRUD/Create";
import { Edit } from "../../components/CRUD/Edit";
import { Update } from "../../components/CRUD/Update";
import { Welcome } from "../../components/Welcome";



export const MyRoutes =()=>{
    return(
        <Routes>
            <Route path = "/" element={<Welcome/>}/>
            <Route path = "administrar" element={<Edit/>}/>
            <Route path = "catalogo" element={<Catalogue/>}/>
            <Route path = "create" element={<Create/>}/>
            <Route path = "update/:code" element={<Update/>}/>
        </Routes>
    )
};