import logoRasp from "../assets/img/raspberry-pi-logo.png";
import { OperationesForm } from "./Operaciones";
import { useState } from "react";

export const Header = () => {
  const [seleccion, setSeleccion] = useState<string>("SUMA");
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logoRasp} alt="Error Imagen Cargado" className=""></img>
            &nbsp; Nombre Aplicativo Nabvar
          </a>
        </div>
      </nav>

      
      <div className="card-footer text-muted text-center">
        <button
          type="submit"
          className="btn btn-info"
          id="suma"
          name="suma"
          onClick={() => {
            setSeleccion("suma");
          }}
        >
          Operacion Sumar
        </button>

        <button
          type="button"
          className="btn btn-warning"
          id="resta"
          name="resta"
          onClick={() => {
            setSeleccion("resta");
          }}
        >
          Operacion Restar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          id="multiplicacion"
          name="multiplicacion"
          onClick={() => {
            setSeleccion("multi");
          }}
        >
          Operacion Multiplicacion
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          id="division"
          name="division"
          onClick={() => {
            setSeleccion("division");
          }}
        >
          Operacion Division
        </button>
      </div>

      <OperationesForm nombreOperacion={seleccion} />
    </div>
  );
};
