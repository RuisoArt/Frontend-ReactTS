import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MenuWelcome } from "../../containers/MenuWelcome";
import { AdminProfile } from "../../views/private/profiles/AdminProfile";
import { ListProfile } from "../../views/private/profiles/ListProfile";

import { NewProfile } from "../../views/private/profiles/NewProfile";
import { AboutUs } from "../../views/private/users/AboutUs";
import { NotFound } from "../../views/share/NotFound";

//ruta peresoza (importa ubicacion).(la promesa de lo que importas)
const LazyAboutUs = lazy(()=> import ("../../views/private/users/AboutUs").then(()=>({default: AboutUs})) );
const LazyNotFound = lazy(()=> import ("../../views/share/NotFound").then(()=>({default: NotFound})));
const LazyMenuWelcome = lazy(()=> import ("../../containers/MenuWelcome").then(()=>({default: MenuWelcome})));

const LazyListProfile = lazy(()=> import ("../../views/private/profiles/ListProfile").then(()=>({default: ListProfile})));
const LazyAdminProfile = lazy(()=> import ("../../views/private/profiles/AdminProfile").then(()=>({default: AdminProfile})));
const LazyNewProfile = lazy(()=> import ("../../views/private/profiles/NewProfile").then(()=>({default: NewProfile})) ); 

export const PrivateRouting = () =>{
    return(
        <Routes>
            <Route path = "/" element={<LazyMenuWelcome/>}/>
            <Route path = "/aboutUs" element={<LazyAboutUs/>}/>
            <Route path = "*" element={<LazyNotFound/>}/>

            <Route path = "/listProfile" element={<LazyListProfile/>}/>
            <Route path = "/adminProfile" element={<LazyAdminProfile/>}/>
            <Route path = "/newProfile" element={<LazyNewProfile/>}/>

        </Routes>
    );
};