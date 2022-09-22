import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ARRAY_MOVIES } from "../../mocks/equipo-mocks";

export const MyVerticallyCenteredModal = (props: any) => {
  const codeMovie = Number(props.variable.codPeicula);
  const especificationMovie = ARRAY_MOVIES.find((theMovie) => {
    return theMovie.codPeicula === codeMovie;
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
          {especificationMovie?.nombrePelicula}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            className="modal_render"
            src={especificationMovie?.imagenPelicula}
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center">
          <p className="card mt-5">
            Parrafo descripcion Parrafo descripcion Parrafo descripcion
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
            descripcion{" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
