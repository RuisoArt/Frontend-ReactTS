import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { ARRAY_CARS } from "../mocks/equipo-mocks";
import { Cars } from "../models/Cars";
import { MyVerticallyCenteredModal } from "./ModalMovies/MyVerticallyCenteredModal";

export const EditCars = () => {

  const [arrayCars, setArrayCars] = useState<Cars[]>(ARRAY_CARS);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objectCars, setObjectCars] = useState<Cars>(new Cars(0,0,"",0,"",""));

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        <div className="card">
          <img src={imagen} alt="No cargo la bendita imagen"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">Administrar Vehiculos</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>marcaVehiculo</th>
                <th style={{ width: "20%" }}>placaVehiculo</th>
                <th style={{ width: "20%" }}>modeloVehiculo</th>
                <th style={{ width: "20%" }}>administrarVehiculo</th>
                <th style={{ width: "20%" }}>nombreImagenVehiculo</th>
              </tr>
            </thead>

            <tbody>
              {arrayCars.map((miCar: Cars, indice: number) => (
                <tr key={miCar.codVehiculo}>
                  <th>{miCar.marcaVehiculo}</th>
                  <td>{miCar.placaVehiculo}</td>
                  <td>{miCar.modeloVehiculo}</td>
                  <td>{miCar.nombreImagenVehiculo}</td>
                  <td>
                    <li className="fa-solid fa-trash-can delete"></li>{" "}
                    <li className="fa-solid fa-edit edit"></li>{" "}
                    <li className="fa-solid fa-rotate refresh"></li>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            variable = {objectCars}
          />
        </div>
      </div>
    </div>
  );
};
