import imagen from "../assets/img/crear_producto (Mediana).jpg";

export const CreateProduct = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <div>
          <img src={imagen} alt="No cargo la bendita imagen carajo"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">Formulario Crear Nuevo Producto</span>
        </div>
        <div className="row mt-4">
          <div className="col-1">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                No
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
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Id_producto
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
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nombre_Producto
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
          </div>
          <div className="col-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Detalle_Producto
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
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Fecha_Producto
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
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                No_Bodega_Producto
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
          </div>
        </div>
        <div className="card-body text-muted text-center">
          <button type="submit" className="btn btn-warning col-3">
            Crear
          </button>
        </div>
        <div className="mt-5">

        </div>
      </div>
    </div>
  );
};
