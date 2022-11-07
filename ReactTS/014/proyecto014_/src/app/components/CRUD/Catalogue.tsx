import { useState } from "react";
import imagen from "../../../assets/img/hello.jpg";
import { Form } from "react-bootstrap";
import { ARRAY_EMPANADAS } from "../../mocks/equipo-mocks";

import { ARRAY_TIPOS } from "../../utilities/domains/DomTipoEmpanada";
import { Empanada } from "../../models/Empanada";
import { MyVerticallyCenteredModal } from "../Modal/MyVerticallyCenteredModal";
import { TipoEmpanada } from "../../../interface/TipoEmpanada";
import { Console } from "console";

export const Catalogue = () => {
  const [arrayEmpanadas, setarrayEmpanadas] = useState<Empanada[]>(ARRAY_EMPANADAS);
  const [arrayTiposEmpanada] = useState<TipoEmpanada[]>(ARRAY_TIPOS);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objectEmpanadas, setobjectEmpanadas] = useState<Empanada>(
    new Empanada(0,"",0,"","")
  );
  
  // Funcion para cargar el tipo de Empanada
  const cargarTipoEmpanada = (elemento: number): any => {
    console.log("llega esta codigo de tipo Empanada: " + elemento);
    let numero = "default";

    arrayTiposEmpanada.map((my: TipoEmpanada) => {
      if (elemento === my.codigo) {
        numero = my.tipoEmpanada;
        console.log("si el codigo es [",my.codigo,"] el tipo seria [",my.tipoEmpanada,"]");
        console.log("Asi pues retornara: [", numero, "]");
        return numero;
      } else {
        console.log("Si no es de la lista retorname: [", elemento, "]");
        return numero;
      }
    });
    console.log("Retorna entonces: [", numero, "]");
    return numero;
  };

  //**************** RETURN ************* */
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        <div className="card">
          <img src={imagen} alt="No cargo la bendita imagen"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">Catalogo de Empanadas</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Codigo</th>
                <th style={{ width: "35%" }}>Nombre</th>
                <th style={{ width: "30%" }}>Tipo</th>
                <th style={{ width: "30%" }}>Imagen</th>
              </tr>
            </thead>

            <tbody>
              {arrayEmpanadas.map((myFood: Empanada, indice: number) => (

                <tr key={myFood.codEmpanada}> 

                  
                  <td>{myFood.codEmpanada}</td>
                  <td>{myFood.nombreEmpanada}</td>
                  <td>{cargarTipoEmpanada(myFood.tipoEmpanada)}</td>
                  <td>
                    {myFood.imagenEmpanada !== "" ? (
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setModalShow(true);
                          setobjectEmpanadas(myFood);
                        }}
                      >
                        <img
                          src={myFood.imagenEmpanada}
                          alt="No cargo la imagen del Vehiculo"
                          className="render"
                        />
                      </a>
                    ) : (
                      <div>No hay imagen</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            variable={objectEmpanadas}
          />
          
        </div>
      </div>
    </div>
  );
};
