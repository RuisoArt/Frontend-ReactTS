import { PrivateRouting } from "../utilities/routes/PrivateRouting";
import { MenuLeft } from "./MenuLeft";
import { MenuUp } from "./MenuUp";

export const PrincipalPage = ()=>{
    return(
        <div>
            <MenuUp/>
            <MenuLeft/>
            <PrivateRouting/>
        </div>
    );
};