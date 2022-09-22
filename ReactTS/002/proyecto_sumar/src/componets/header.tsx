import logoRasp from "../assets/img/raspberry-pi-logo.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src={logoRasp} alt="Error Imagen Cargado" className=""></img>
          &nbsp; Nombre Aplicativo Nabvar
        </a>
      </div>
    </nav>
  );
};
