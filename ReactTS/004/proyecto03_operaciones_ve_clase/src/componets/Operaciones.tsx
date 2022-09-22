import React, { useEffect, useState } from "react";

type miObjeto ={nombreOperacion:string};

export const OperationesForm = (tipoOperacion:miObjeto) => {


  type miFormulario = React.FormEvent<HTMLFormElement>;

  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  const calculoOperacion = ():void=>{
    switch(tipoOperacion.nombreOperacion.toLocaleLowerCase()) {
      case 'suma':
        setResultado(valNum1 + valNum2);
        break;
      case 'resta':
        setResultado(valNum1 - valNum2);
        break;
      case 'multi':
        setResultado(valNum1 * valNum2);
        break;
      case 'division':
        setResultado(valNum1 / valNum2);
        break;
      default:
        break;
    }
  };

  const clicBotonCalcular = (event: miFormulario) => {
    event.preventDefault();
    calculoOperacion();
  };

  useEffect(()=>{
    calculoOperacion();
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-7 mt-4 ">
        <form onSubmit={clicBotonCalcular}>
          <div className="card text-right">
            <div className="card-header text-center">
              {" "}
              <span className="titulo">Formulario de Calculo [{tipoOperacion.nombreOperacion}]</span>{" "}
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Numero Uno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="num1"
                  name="num1"
                  onChange={(event) => {
                    const dato = Number(event.target.value);
                    setValNum1(dato);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Numero Dos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="num2"
                  name="num2"
                  onChange={(event) => {
                    const dato = Number(event.target.value);
                    setValNum2(dato);
                  }}
                />
              </div>
            </div>
            <div className="card-footer text-muted text-center">
              <button type="submit" className="btn btn-primary">
                Calcular {tipoOperacion.nombreOperacion}
              </button>
            </div>
            <div className="card-footer text-center">
              <span className="resultado">RESULTADO = {resultado}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
