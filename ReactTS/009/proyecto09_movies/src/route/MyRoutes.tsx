import {Route, Routes} from "react-router-dom";
import { MyBody } from "../app/componets/MyBody";


export const MyRoutes =()=>{
    return(
        <Routes>
            <Route path = "/" element={<MyBody/>}/>
        </Routes>
    )
};