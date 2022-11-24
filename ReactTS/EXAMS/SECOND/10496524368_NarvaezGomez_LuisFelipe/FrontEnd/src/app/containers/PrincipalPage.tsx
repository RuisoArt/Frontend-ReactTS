import { PrivateRouting } from "../utilities/routes/PrivateRouting";
import { MenuLeft } from "./MenuLeft";
import { MenuUp } from "./MenuUp";
import { Header } from "../components/Header";

export const PrincipalPage = () => {
  return (
    <div>
      <MenuUp />
      <MenuLeft />
      <PrivateRouting />
    </div>
  );
};
