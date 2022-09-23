import {Route, Routes} from "react-router-dom";
import { CreateProduct } from "../componets/CreateProduct";
import { List } from "../componets/List";
import { MyBlog } from "../componets/MyBlog";
import { MyForm } from "../componets/MyForm";
import { MyLogin } from "../componets/MyLogin";
import { Welcome } from "../componets/Welcome";

export const MyRoutes =()=>{
    return(
        <Routes>
            <Route path = "/" element={<Welcome/>}/>
            <Route path = "/formulario" element={<MyForm/>}/>
            <Route path = "/listado" element={<List/>}/>
            <Route path = "/Login" element={<MyLogin/>}/>
            <Route path = "/crearProducto" element={<CreateProduct/>}/>
            <Route path = "/blogger" element={<MyBlog/>}/>
        </Routes>
    )
};