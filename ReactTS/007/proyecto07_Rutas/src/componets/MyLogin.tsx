import imagen from "../assets/img/Imagen-Login (Pequeño).jpg";

export const MyLogin = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-5 mt-5">
          <div className="card">
            <div>
              <div className="card-body text-center">
                <span className="titulo">Formulario de Login</span>
              </div>
              <div className="card-body">
                <div className="mb-3 ">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Usuario o E-mail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(event) => {
                          //
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        name="pass"
                        onChange={(event) => {
                          //
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center"></div>
                  </div>
                </div>
              </div>
              <div className="card-body    text-muted text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="col-md-12 mt-5">
            <div className="card">
              <img src={imagen} alt="Error Imagen Cargado" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
