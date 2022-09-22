import { useState } from "react";
import logoRasp from "../assets/img/raspberry-pi-logo.png";
import { InterOperacionesMetodo } from "../interface/InterOperacionesMetodo";
import { InterTipoNumeroMetodo } from "../interface/InterTipoNumeroMetodo";

export const Header = (
  props: InterOperacionesMetodo
) => {
  //const [seleccion, setSeleccion] = useState<string>("SUMA");
  const [flagPrueba, setFlagPrueba] = useState<string>("PAR");

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logoRasp} alt="Error Imagen Cargado" className=""></img>{" "}
            Taller React 006
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Condicion
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="par"
                        name="par"
                        onClick={() => {
                          //setFlagPrueba("par");
                          props.seleccionarTipoNumero("par");
                        }}
                      >
                        Solo Numeros Pares
                      </button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="submit"
                        className="btn btn-success"
                        id="impar"
                        name="impar"
                        onClick={() => {
                          //setFlagPrueba("impar");
                          props.seleccionarTipoNumero("impar");
                        }}
                      >
                        Solo Numeros Impares
                      </button>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operacion Matematica
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="submit"
                        className="btn btn-info"
                        id="suma"
                        name="suma"
                        onClick={() => {
                          //setSeleccion("suma");
                          props.seleccionarOperacion("suma");
                        }}
                      >
                        Operacion Sumar
                      </button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="button"
                        className="btn btn-warning"
                        id="resta"
                        name="resta"
                        onClick={() => {
                          //setSeleccion("resta");
                          props.seleccionarOperacion("resta");
                        }}
                      >
                        Operacion Restar
                      </button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="multiplicacion"
                        name="multiplicacion"
                        onClick={() => {
                          //setSeleccion("multi");
                          props.seleccionarOperacion("multi");
                        }}
                      >
                        Operacion Multiplicacion
                      </button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        id="division"
                        name="division"
                        onClick={() => {
                          //setSeleccion("division");
                          props.seleccionarOperacion("division");
                        }}
                      >
                        Operacion Division
                      </button>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
