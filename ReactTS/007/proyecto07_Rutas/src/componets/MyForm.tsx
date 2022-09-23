export const MyForm = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 mt-4 ">
          <div className="card">
            <div>
              <div className="card-header text-center">
                <span className="titulo">Formulario de RANDOM AJA</span>
              </div>
            </div>
            <div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Casilla de Informacion Uno AJA
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="random1"
                        name="random1"
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
                        Casilla de Informacion Dos AJA
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="num2"
                        name="num2"
                        onChange={(event) => {
                          //
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Casilla de Informacion Tres AJA
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="random1"
                        name="random1"
                        onChange={(event) => {
                          //
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Casilla de Informacion Cuatro AJA
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="random1"
                        name="random1"
                        onChange={(event) => {
                          //
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer text-muted text-center">
              <button type="submit" className="btn btn-primary">
                Boton AJA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
