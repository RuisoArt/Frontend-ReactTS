import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import imagen from "../../../assets/img/hello.jpg";
import { ARRAY_EMPANADAS } from "../../mocks/equipo-mocks";
import { ARRAY_TIPOS } from "../../utilities/domains/DomTipoEmpanada"; // si se quiere mostrar un tipo elemento
import { Empanada } from "../../models/Empanada";
import { TipoEmpanada } from "../../../interface/TipoEmpanada"; // si se quiere mostrar un tipo elemento
import { MyVerticallyCenteredModal } from "./../Modal/MyVerticallyCenteredModal";


export const Edit = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  
  const [arrayEmpanada, setArrayEmpanada] = useState<Empanada[]>(ARRAY_EMPANADAS);
  const [arrayTiposEmpanada] = useState<TipoEmpanada[]>(ARRAY_TIPOS); // si se quiere mostrar un tipo elemento
  const [objectEmpanada, setObjectEmpanada] = useState<Empanada>(
    new Empanada(0,"",0,"","")
  );

  //De la Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Funcion Borrar
  const deleteElement = (code: number) =>{
    const limit = arrayEmpanada.length;

    for (let i = 0; i < limit; i++){
      if(arrayEmpanada[i] != undefined){
        const comparar = arrayEmpanada[i].codEmpanada;
        if(comparar === code){
            arrayEmpanada.splice(i, 1);
        }
      }
    }
  };

  // ********* Esta solo si se quiere mostrar un tipo Elemento
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

  // ************************ RETURN ************************
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
                <th style={{ width: "5%" }}>Codigo</th>
                <th style={{ width: "25%" }}>Nombre</th>
                <th style={{ width: "30%" }}>Tipo</th>
                <th style={{ width: "20%" }}>Nombre Imagen</th>

                <th style={{ width: "20%" }}>administrar</th>
              </tr>
            </thead>

            <tbody>
              {arrayEmpanada.map((myFood: Empanada, indice: number) => (
                <tr key={myFood.codEmpanada}>

                  <th>{myFood.codEmpanada}</th>
                  <th>{myFood.nombreEmpanada}</th>
                  <td>{cargarTipoEmpanada(myFood.tipoEmpanada)}</td>
                  <th>{myFood.nombreImagen}</th>
                  <td>
                    <a href="#" 
                    onClick={(e)=>{
                      e.preventDefault();
                      setShow(true);
                      setObjectEmpanada(myFood);
                    }}>
                      <li className="fa-solid fa-trash-can delete"></li>
                    </a>
                    
                    {" "}

                    <Link to = {`/update/${myFood.codEmpanada}`}>
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
              
              <strong>{objectEmpanada.nombreEmpanada}{objectEmpanada.tipoEmpanada}</strong>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" 
              onClick={(e)=>{
                    e.preventDefault();
                    deleteElement(objectEmpanada.codEmpanada);
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
