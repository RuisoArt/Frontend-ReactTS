import React, { useState } from "react";

export const AddForm = () => {
  type miFormulario = React.FormEvent<HTMLFormElement>;

  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);
  const [suma, setSuma] = useState<number>(0);
  const [resta, setResta] = useState<number>(0);
  const [multiplicacion, setMultiplicacion] = useState<number>(0);
  const [division, setDivision] = useState<number>(0);
  const [opcion, setOpcion] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);

  const elegirOperacion=()=>{
    if(opcion=='sumar'){
      calculoSumar();
    }
  };

  const calculoSumar = () => {
    setSuma(valNum1 + valNum2);
    setResultado(suma);
  };

  const calculoRestar = () => {
    setResta(valNum1 - valNum2);
  };

  const calculoMultiplicacion = () => {
    setMultiplicacion(valNum1*valNum2);
  };

  const calculoDivision = () => {
    setDivision(valNum1/valNum2);
  };

  const clicBotonCalcular = (event: miFormulario) => {
    event.preventDefault();
    //calculoSumar();
    elegirOperacion();
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-7 mt-4 ">
        <form onSubmit={clicBotonCalcular}>
          <div className="card text-right">
            <div className="card-header text-center">
              {" "}
              <span className="titulo">Formulario de Calculo</span>{" "}
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
            <div className="card-footer text-muted text-center ">
              <button
                type="submit"
                className="btn btn-info"
                id="suma"
                name="suma"
                onChange={(event) => {
                  const dato = 'sumar';
                  setOpcion(dato);
                }}
              >
                Operacion Sumar
              </button>
              <button
                type="button"
                className="btn btn-warning"
                id="resta"
                name="resta"
              >
                Operacion Restar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="multiplicacion"
                name="multiplicacion"
              >
                Operacion Multiplicacion
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                id="division"
                name="division"
              >
                Operacion Division
              </button>
            </div>
            <div className="card-footer text-muted text-center">
              <button type="submit" className="btn btn-primary">
                Calcular
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
