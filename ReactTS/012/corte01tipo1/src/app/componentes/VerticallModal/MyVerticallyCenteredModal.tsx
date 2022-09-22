import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {ARRAY_CAMISAS} from '../../mocks/camisa-mock';

export const MyVerticallyCenteredModal = (props: any) => {
  
  const codeCamisa =  Number(props.variable.codCamisa);
  const specificCar = ARRAY_CAMISAS.find((theTShirt)=>{
    return theTShirt.codCamisa === codeCamisa;
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
          {specificCar?.marcaCamisa}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            className="modal_render"
            src={specificCar?.base64ImagenCamisa}
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
