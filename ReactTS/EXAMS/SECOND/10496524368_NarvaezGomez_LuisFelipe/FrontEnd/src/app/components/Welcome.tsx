import imagen from "../../assets/image/4108853_2.png";

export const Welcome = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 mt-4 ">
        <div className="card">
          <div>
            <div className="d-flex justify-content-center">
              <img src={imagen} alt="no se cargo la imagen" className="imagen-welcome" />
            </div>
            <div className="card-body text-center">
              <span className="titulo">Developer Welcome</span>
            </div>
          </div>
          <div>
            <div className="card-body">
              <div className="mb-3 text-center">
                <p>
                  Readme: <br/>
                  To access the functions of: Login , Register, Dashboard, Not Found, etc.<br/>
                  Please enter the DropDown menu<br/><br/>
                  Leeme: <br></br>
                  Para acceder a las funciones de: Login , Register, Dashboard, Not Found, etc.<br></br>
                  Por favor ingresar al menu DropDown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
