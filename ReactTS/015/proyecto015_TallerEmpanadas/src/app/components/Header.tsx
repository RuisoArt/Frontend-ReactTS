import { Link } from "react-router-dom";
import logoRasp from "../../assets/img/raspberry-pi-logo.png";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img
              src={logoRasp}
              alt="Error Imagen Cargado"
              className="icono_render"
            ></img>{" "}
            Taller React - Empanadas CRUD
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/">
                  Inicio
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
                  CRUDE
                </a>
                <ul className="dropdown-menu">

                  <li>
                  <Link className="nav-link" to="/create">
                    <button
                        type="button"
                        className="btn btn-danger"
                        id="resta"
                        name="resta"
                        onClick={() => {
                          //
                        }}
                      >
                        Create {"[Create]"}
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/catalogo" className="dropdown-item">
                      <button
                        type="submit"
                        className="btn btn-info"
                        id="suma"
                        name="suma"
                        onClick={() => {
                          //
                        }}
                      >
                        Catalogue {"[Read]"}
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/administrar">
                      <button
                        type="button"
                        className="btn btn-warning"
                        id="resta"
                        name="resta"
                        onClick={() => {
                          //
                        }}
                      >
                        Administrar {"[Update-Delete-Edit]"}
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
