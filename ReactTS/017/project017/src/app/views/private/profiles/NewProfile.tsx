import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import { useState } from "react";
import Profile from "../../../models/Profile";
import PrivateService from "../../../services/PrivateService";
import ApiBack from "../../../utilities/domains/ApiBack";
import { useFormulario } from "../../../utilities/hooks/useFormulario";
import { MensajeToastify } from "../../../utilities/functions/MensajeToastify";

export const NewProfile = () => {
  // Variables
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false);
  let { profileName, profileState, doubleLink, object } = useFormulario<Profile>(new Profile("", 0));

  // Función flecha para limpiar cajas
  const cleanBoxes = (myForm: HTMLFormElement) => {
    myForm.reset();

    object.profileName = "";
    object.profileState = 0;

    myForm.profileName.value = "";
    myForm.profileState.value = "";

    myForm.classList.remove("was-validated");
  };

  // Crear el perfil
  const sendingForm = async (fh: formaHtml) => {
    fh.preventDefault();
    setInProcess(true);

    const currentForm = fh.currentTarget;
    currentForm.classList.add("was-validated");

    if (currentForm.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const result = await PrivateService.petitionPOST(ApiBack.CREATE_PRIVATE_PROFILE , object);
      if (result.id) {
        setInProcess(false);
        MensajeToastify("info", "Perfil creado", 7000);
      } else {
        MensajeToastify("error", "Perfil no creado", 7000);
      }
      cleanBoxes(currentForm);
    }
  };

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Perfiles</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/#">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Crear perfil</li>
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
              <Form.Group as={Row} className="mb-3" controlId="profileName">
                <Form.Label column sm={2}>
                  Nombre perfil
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="text"
                    name="profileName"
                    className="form-control"
                    value={profileName}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nombre del perfil es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="profileState">
                <Form.Label column sm={2}>
                  Estado perfil
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    required
                    name="profileState"
                    value={profileState}
                    onChange={doubleLink}
                  >
                    <option value="">Seleccione el estado</option>
                    <option value={1}>Activo</option>
                    <option value={2}>Inactivo</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Seleccione el estado del perfil
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Crear perfil</Button>
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
