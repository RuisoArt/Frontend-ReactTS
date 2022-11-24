import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "../../components/Welcome";
import { PrincipalPage } from "../../containers/PrincipalPage";
import { Login } from "../../views/public/Login";
import { Register } from "../../views/public/Register";
import { NotFound } from "../../views/share/NotFound";

const LazyLogin = lazy(()=> import ("../../views/public/Login").then(()=>({default: Login})) ); //ruta peresoza (importa ubicacion).(la promesa de lo que importas)
const LazyRegister = lazy(()=> import ("../../views/public/Register").then(()=>({default: Register})));
const LazyNotFound = lazy(()=> import ("../../views/share/NotFound").then(()=>({default: NotFound})));
const LazyHome = lazy(()=> import ("../../containers/PrincipalPage").then(()=>({default: PrincipalPage})));
const LazyWelcome = lazy( ()=>import ("../../components/Welcome").then( ()=>({default: Welcome})));

export const CompletRouting = () => {


    return(
        <Routes>
            <Route path = "/" element={<LazyWelcome/>}/>
            <Route path = "/login-route" element={<LazyLogin/>}/>
            <Route path = "/register-route" element={<LazyRegister/>}/>
            <Route path = "/home-route/*" element={<LazyHome/>}/>

            
            <Route path ="*" element={<LazyNotFound/>}/>
        </Routes>
    );
};