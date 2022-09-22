import logo from "../assets/img/calc_icono.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="No cargo la imagen We" className="text-center" />
          &nbsp;<span className="">&nbsp;Calculadora</span>
        </a>
      </div>
    </nav>
  );
};
