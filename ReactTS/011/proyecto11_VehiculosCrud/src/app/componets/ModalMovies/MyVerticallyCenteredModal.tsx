import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ARRAY_CARS } from "../../mocks/equipo-mocks";

export const MyVerticallyCenteredModal = (props: any) => {
  
  const codeCars =  Number(props.variable.codVehiculo);
  const specificCar = ARRAY_CARS.find((theCar)=>{
    return theCar.codVehiculo === codeCars;
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
          {specificCar?.placaVehiculo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            className="modal_render"
            src={specificCar?.imagenVehiculo}
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
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo
            descripcion Parrafo descripcion Parrafo descripcion Parrafo{" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
