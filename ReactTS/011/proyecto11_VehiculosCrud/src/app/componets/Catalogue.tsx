import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { Form } from "react-bootstrap";
import { ARRAY_CARS } from "../mocks/equipo-mocks";

import { ARRAY_MARCAS } from "../utilities/domains/DomVehiculoMarca";
import { Cars } from "../models/Cars";
import { MyVerticallyCenteredModal } from "./ModalMovies/MyVerticallyCenteredModal";
import { VehiculoMarca } from "../../interface/VehiculoMarca";
import { Console } from "console";

export const Catalogue = () => {
  const [arrayCars, setArrayCars] = useState<Cars[]>(ARRAY_CARS);
  const [arregloMarcas] = useState<VehiculoMarca[]>(ARRAY_MARCAS);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objectCars, setObjectCars] = useState<Cars>(
    new Cars(0, 0, "", 0, "", "")
  );

  const cargarMarca = (elemento: number): any => {
    console.log("llega esta codigo de marca: " + elemento);
    let numero = "default";

    arregloMarcas.map((my: VehiculoMarca) => {
      if (elemento === my.codigo) {
        numero = my.nombreMarca;
        console.log("si el codigo es [",my.codigo,"] la marca seria [",my.nombreMarca,"]");
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

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        <div className="card">
          <img src={imagen} alt="No cargo la bendita imagen"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">Catalogo Vehiculos</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>marcaVehiculo</th>
                <th style={{ width: "25%" }}>placaVehiculo</th>
                <th style={{ width: "25%" }}>modeloVehiculo</th>
                <th style={{ width: "25%" }}>imagenVehiculo</th>
              </tr>
            </thead>

            <tbody>
              {arrayCars.map((miCar: Cars, indice: number) => (
                <tr key={miCar.codVehiculo}>
                  <td>{cargarMarca(miCar.marcaVehiculo)}</td>
                  <td>{miCar.placaVehiculo}</td>
                  <td>{miCar.modeloVehiculo}</td>
                  <td>
                    {miCar.imagenVehiculo !== "" ? (
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setModalShow(true);
                          setObjectCars(miCar);
                        }}
                      >
                        <img
                          src={miCar.imagenVehiculo}
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
            variable={objectCars}
          />
          
        </div>
      </div>
    </div>
  );
};
