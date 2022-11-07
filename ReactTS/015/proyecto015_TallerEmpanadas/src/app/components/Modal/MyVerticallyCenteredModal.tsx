import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ARRAY_EMPANADAS } from "../../mocks/equipo-mocks";

export const MyVerticallyCenteredModal = (props: any) => {
  
  const codeEmpanada =  Number(props.variable.codEmpanada);
  const specificEmpanada = ARRAY_EMPANADAS.find((theFood)=>{
    return theFood.codEmpanada === codeEmpanada;
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {specificEmpanada?.nombreEmpanada}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            className="modal_render"
            src={specificEmpanada?.imagenEmpanada}
            alt=""
          />
        </div>

       

        <div className="d-flex justify-content-center">
          <p className="card mt-5">
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            {" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
