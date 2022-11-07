import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { ARRAY_CARS } from "../mocks/equipo-mocks";
import { Cars } from "../models/Cars";
import { MyVerticallyCenteredModal } from "./ModalMovies/MyVerticallyCenteredModal";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EditCars = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  
  const [arrayCars, setArrayCars] = useState<Cars[]>(ARRAY_CARS);
  const [objectCars, setObjectCars] = useState<Cars>(
    new Cars(0, 0, "", 0, "", "")
  );

  //De la Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Funcion Borrar
  const deleteCar = (code: number) =>{
    const limit = arrayCars.length;

    for (let i = 0; i < limit; i++){
      if(arrayCars[i] != undefined){
        const comparar = arrayCars[i].codVehiculo;
        if(comparar === code){
            arrayCars.splice(i, 1);
        }
      }
    }
  };

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
                <th style={{ width: "20%" }}>nombreImagenVehiculo</th>
                <th style={{ width: "20%" }}>administrarVehiculo</th>
                
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
                    <a href="#" 
                    onClick={(e)=>{
                      e.preventDefault();
                      setShow(true);
                      setObjectCars(miCar);
                    }}>
                      <li className="fa-solid fa-trash-can delete"></li>
                    </a>
                    
                    {" "}


                    <Link to = {`/update/${miCar.codVehiculo}`}>
                      <li className="fa-solid fa-edit edit"></li>{" "}
                    </Link>
                    


                    <li className="fa-solid fa-rotate refresh"></li>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
              
              <strong>{objectCars.marcaVehiculo}{objectCars.placaVehiculo}</strong>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" 
              onClick={(e)=>{
                    e.preventDefault();
                    deleteCar(objectCars.codVehiculo);
                    setShow(false);
                }
              }>Delete</Button>
            </Modal.Footer>
          </Modal>


        </div>
      </div>
    </div>
  );
};
