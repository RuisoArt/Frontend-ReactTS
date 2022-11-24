import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import { useState } from "react";
import Avion from "../../../models/Avion";
import PrivateService from "../../../services/PrivateService";
import ApiBack from "../../../utilities/domains/ApiBack";
import { useFormulario } from "../../../utilities/hooks/useFormulario";
import { MensajeToastify } from "../../../utilities/functions/MensajeToastify";

export const NewAvion = () => {
  // Variables
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false);
  let { avionType, avionCompany, avionAvailability, doubleLink, object } 
  = useFormulario<Avion>(new Avion(0,"",0));

  // Función flecha para limpiar cajas
  const cleanBoxes = (myForm: HTMLFormElement) => {
    myForm.reset();
// here!
    object.avionCompany = "";
    object.avionType = 0;
    object.avionAvailability = 0;

    myForm.avionCompany.value = "";
    myForm.avionType.value = "";
    myForm.avionAvailability.value = "";

    myForm.classList.remove("was-validated");
  };

  // Crear el elemento
  const sendingForm = async (fh: formaHtml) => {
    fh.preventDefault();
    setInProcess(true);

    const currentForm = fh.currentTarget;
    currentForm.classList.add("was-validated");

    if (currentForm.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const result = await PrivateService.petitionPOST(ApiBack.CREATE_PRIVATE_AVION , object);
      if (result.id) {
        setInProcess(false);
        MensajeToastify("info", "Avion creado", 7000);
      } else {
        MensajeToastify("error", "Avion no creado", 7000);
      }
      cleanBoxes(currentForm);
    }
  };

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Aviones</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/#">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Crear Avion</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Formulario de creación</h5>

            <Form noValidate validated={inProcess} onSubmit={sendingForm}>
              <Form.Group as={Row} className="mb-3" controlId="avionCompany">
                <Form.Label column sm={2}>
                  Empresa del Avion
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="text"
                    name="avionCompany"
                    className="form-control"
                    value={avionCompany}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nombre de la empresa a la que pertenece el avion es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="avionType">
                <Form.Label column sm={2}>
                  Tipo de Avion
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    required
                    name="avionType"
                    value={avionType}
                    onChange={doubleLink}
                  >
                    <option value="">Seleccione el tipo</option>
                    <option value={1}>Comercial</option>
                    <option value={2}>Carga</option>
                    <option value={3}>Militar</option>
                    <option value={4}>Privado</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Seleccione el tipo de avion
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="avionAvailability">
                <Form.Label column sm={2}>
                  Disponibilidad el avion
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    required
                    name="avionAvailability"
                    value={avionAvailability}
                    onChange={doubleLink}
                  >
                    <option value="">Seleccione la disponibilidad</option>
                    <option value={1}>Publico</option>
                    <option value={2}>Privado</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Seleccione la disponibilidad del avion
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Crear</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};
