import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate , useParams } from "react-router-dom";

import { TipoEmpanada } from "../../../interface/TipoEmpanada";
import { ARRAY_TIPOS } from "../../utilities/domains/DomTipoEmpanada";
import { ARRAY_EMPANADAS } from "../../mocks/equipo-mocks";
import noFoto from "../../../assets/img/file.png";
import { useFormulario } from "../../utilities/hooks/useFormulario";
import { Empanada } from "../../models/Empanada";
import { ConvertImage64 } from "../../utilities/function/ConvertImage64";

import imagen from "./../../../assets/img/hello.jpg";

export const Create = () => {
  type formHtml = React.FormEvent<HTMLFormElement>;

  const [arrayTiposEmpanadas] = useState<TipoEmpanada[]>(ARRAY_TIPOS);
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [arrayEmpanadas, setarrayEmpanadas] = useState<Empanada[]>(ARRAY_EMPANADAS);
  const [imgBase64, setimgBase64] = useState<string>("");
  const navegate = useNavigate();

  // Funcion que envia el formulario al momento de crear
  const enviarFormulario = (fh: formHtml) => {
    fh.preventDefault();
    const formulario = fh.currentTarget;

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProcess(true);
    } else {
      //la siguiente linea deberia darmela el backend
      const nuevoCodigo = arrayEmpanadas.length + 1;
      //OJO! con los nombres de las variables del MODELO
      objeto.codEmpanada = nuevoCodigo;
      objeto.imagenEmpanada = imgBase64;
      objeto.tipoEmpanada = Number(tipoEmpanada);

      arrayEmpanadas.push(objeto);

      setInProcess(false);
      navegate("/catalogo");
    }
  };

  // Este es un metodo para cargar mi nueva imagen y mostrarla despues creada
  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];

    

    setImagenMiniatura(URL.createObjectURL(imagen));

    dobleEnlace(e);
    const myBase64 = await ConvertImage64(imagen);

    setimgBase64(String(myBase64));
  };

  // Two Data Binding = Hooks ESTE es un HOOK personalizado
  let {
    // OJO! con las comas y las variables del MODELO
    codEmpanada,
    nombreEmpanada,
    tipoEmpanada,
    nombreImagen,
    imagenEmpanada,    

    dobleEnlace,
    objeto,
  } = useFormulario<Empanada>(new Empanada(0,"",0,"",""));

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 mt-4 ">
          <Form validated={inProcess} onSubmit={enviarFormulario} noValidate>
            <div className="card">
            <div className="d-flex justify-content-center">
              <img src={imagen} alt="no se cargo la imagen" className="" />
            </div>

              <div className="card-header text-center">
                <span className="titulo">Ingrese nueva Empanada</span>
              </div>

              

              <div className="card-body">
                <div className="mb-3">
                  <div className="card-body">

                    <div className="mb-3">
                      <Form.Group controlId="nombreEmpanada">
                        <Form.Label>
                          <span className="delete">*</span>
                          Nombre Empanada
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          name="nombreEmpanada"
                          required
                          value={nombreEmpanada}
                          onChange={dobleEnlace}
                        />
                      </Form.Group>
                    </div>

                    <div className="mb-3">
                      <Form.Group controlId="tipoEmpanada">
                        <Form.Label>
                          <span className="delete">*</span> Tipo Empanada
                        </Form.Label>

                        <Form.Select
                          size="sm"
                          required
                          name="tipoEmpanada"
                          value={tipoEmpanada}
                          onChange={dobleEnlace}
                        >
                          <option value="">Seleccione un tipo de empanada</option>
                          {arrayTiposEmpanadas.map((myTipo: TipoEmpanada) => (
                            <option key={myTipo.codigo} value={myTipo.codigo}>
                              {myTipo.tipoEmpanada}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      
                    </div>

                                       
                    
                    <div className="form-group mb-3 ">
                      <Form.Group controlId="nombreImagen">
                        <Form.Label>
                          <span className="delete">*</span>
                          imagenEmpanada -- nombreImagen
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          required
                          type="file"
                          name="nombreImagen"
                          value={nombreImagen}
                          onChange={cargarImagen}
                        />
                      </Form.Group>
                    </div>



                    <div className="form-group mb-3">
                      <div className="d-flex justify-content-center">
                        <img
                          src={imagenMiniatura}
                          alt="No cargo la pinchi imagen"
                          className="tamaño_not_found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted text-center">
                <button type="submit" className="btn btn-primary mt-3">
                  -Ingresar-
                </button>
              </div>
            </div>
          </Form>

          
        </div>
      </div>
    </div>
  );
};
