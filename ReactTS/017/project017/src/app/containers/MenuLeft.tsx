import { Link } from "react-router-dom";
import { opcionesAdmin, opcionesInvitado, } from "../utilities/domains/SystemOptions";
import logoReact from "../../assets/image/logo_tacos.png";

export const MenuLeft = () => {
  const profileName: String = "Administrador";

  let opciones: any[] = [];

  switch (profileName) {
    case "Administrador":
      opciones = opcionesAdmin;
      break;
    case "Invitado":
      opciones = opcionesInvitado;
      break;
    default:
      console.log("No hay menú...");
      break;
  }
  //Por ahora todos admin
  opciones = opcionesAdmin;
  return (
    <aside id="sidebar" className="sidebar">
      <Link
        to="/home-route"
        className="d-flex align-items-center pb-3 mb-3 link-dark border-bottom"
      >
        <img src={logoReact} alt="noLogo" className="bi pe-none me-2 icono_menü" />
        <div>
          <span className="fs-5 fw-semibold">{profileName}</span>
        </div>
      </Link>

      <ul className="sidebar-nav" id="sidebar-nav">
        {opciones.map((opcion, indice) =>
          opcion.hijos.length ? (
            <li className="nav-item" key={"li" + indice}>
              <a
                className="nav-link collapsed"
                data-bs-target={"#menu" + indice}
                data-bs-toggle="collapse"
                href="/#"
              >
                <i className={opcion.icono}></i>
                <span>{opcion.nombre}</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id={"menu" + indice}
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                {opcion.hijos.map((subMenu: any, otroIndice: number) => (
                  <li key={"sub" + otroIndice}>
                    <Link to={subMenu.ruta}>
                      <i className={subMenu.icono}></i>
                      <span>{subMenu.nombre}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="nav-item" key={indice}>
              <Link to={opcion.ruta} className="nav-link collapsed">
                <i className={opcion.icono}></i>
                <span>{opcion.nombre}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </aside>
  );

  /*
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>home-route</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i>
                  <span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i>
                  <span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i>
                  <span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i>
                  <span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i>
                  <span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i>
                  <span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i>
                  <span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i>
                  <span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i>
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i>
                  <span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i>
                  <span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i>
                  <span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Forms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle"></i>
                  <span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle"></i>
                  <span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-bar-chart"></i>
              <span>Charts</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle"></i>
                  <span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i className="bi bi-circle"></i>
                  <span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle"></i>
                  <span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="/#"
            >
              <i className="bi bi-gem"></i>
              <span>Icons</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle"></i>
                  <span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i className="bi bi-circle"></i>
                  <span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bi bi-circle"></i>
                  <span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/register-route">
            <i className="bi bi-card-list"></i>
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/login-route">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/*">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>
        </ul>
      </aside>

      
    </div>
  );
  */
};
