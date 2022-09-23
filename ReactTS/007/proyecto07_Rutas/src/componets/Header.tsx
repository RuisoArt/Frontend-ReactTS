import { Link } from "react-router-dom";
import logoRasp from "../assets/img/raspberry-pi-logo.png";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logoRasp} alt="Error Imagen Cargado" className=""></img>{" "}
            Taller React 007-5
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="formulario" className="nav-link">
                  Formulario
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="listado" className="nav-link">
                  Listado
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="Login" className="dropdown-item">
                      <button
                        type="submit"
                        className="btn btn-info"
                        id="suma"
                        name="suma"
                        onClick={() => {
                          //
                        }}
                      >
                        Iniciar Secion
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="crearProducto">
                      <button
                        type="button"
                        className="btn btn-warning"
                        id="resta"
                        name="resta"
                        onClick={() => {
                          //
                        }}
                      >
                        Crear Producto
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="blogger">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="multiplicacion"
                        name="multiplicacion"
                        onClick={() => {
                          //
                        }}
                      >
                        Blogger
                      </button>
                    </Link>
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
