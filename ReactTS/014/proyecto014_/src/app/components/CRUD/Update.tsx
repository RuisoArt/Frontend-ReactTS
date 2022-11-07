import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
//Mismas importaciones del create
import { TipoEmpanada } from "../../../interface/TipoEmpanada";
import { ARRAY_TIPOS } from "../../utilities/domains/DomTipoEmpanada";
import { ARRAY_EMPANADAS } from "../../mocks/equipo-mocks";
import noFoto from "../../../assets/img/file.png";
import { useFormulario } from "../../utilities/hooks/useFormulario";
import { Empanada } from "../../models/Empanada";
import { ConvertImage64 } from "../../utilities/function/ConvertImage64";

export const Update = () => {
  type formHtml = React.FormEvent<HTMLFormElement>;

  const [arrayTiposEmpanada] = useState<TipoEmpanada[]>(ARRAY_TIPOS);
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [arrayEmpanada, setArrayEmpanada] = useState<Empanada[]>(ARRAY_EMPANADAS);
  const [imgBase64, setimgBase64] = useState<string>("");
  const navegate = useNavigate();

  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [imgSmall, setImgSmall] = useState<string>("");

  //actualizar parametros
  let { code } = useParams();
  const specificElement = ARRAY_EMPANADAS.find((myEmpanada) => {
    return myEmpanada.codEmpanada === Number(code);
  });

  // Two Data Binding = Hooks ESTE es un hook personalizado
  let {
    // ojo con las variables del MODELO y las comas
    codEmpanada,
    nombreEmpanada,
    tipoEmpanada,
    nombreImagen,
    imagenEmpanada, 


    dobleEnlace,
    objeto,
  } = useFormulario<Empanada>(
    new Empanada(
      //OJO! con que el nombre de la imagen no tenga un arreglo similar a los demas
      //OJO! con el valor de las variables
      specificElement ? specificElement.codEmpanada : 0,
      specificElement ? specificElement.nombreEmpanada : "",
      specificElement ? specificElement.tipoEmpanada : 0,
      "",
      specificElement ? specificElement.imagenEmpanada : ""
    )
  );

  // Este metodo Actualiza los datos del Elemento
  const updateMyElement = () => {
    const limit = arrayEmpanada.length;

    for (let i = 0; i < limit; i++) {
      const comparar = arrayEmpanada[i].codEmpanada;

      if (comparar === specificElement?.codEmpanada) {
        arrayEmpanada[i] = new Empanada(
          //trae del hook anteriormente
          // el valor de nombre cambia por el IF IN LINE
          //La imagen cambia a imgBase64 la variable
          codEmpanada,
          nombreEmpanada,
          tipoEmpanada,
          nombreImagen === "" ? specificElement.nombreImagen : nombreImagen,
          imgBase64,
        );
      }
    }
  };

  // Funcion para enviar el formulario una vez actualizado
  const enviarFormulario = (fh: formHtml) => {
    fh.preventDefault();
    const formulario = fh.currentTarget;

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProcess(true);
    } else {
      updateMyElement();
      navegate("/administrar");
    }
  };

  // Funcion para cargar la imagen
  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];

    setImagenMiniatura(URL.createObjectURL(imagen));

    dobleEnlace(e);
    const myBase64 = await ConvertImage64(imagen);

    setimgBase64(String(myBase64));
  };

  // Funcion para la imagen
  useEffect(() => {
    setImgSmall(imagenEmpanada);
    setImagenMiniatura(imagenEmpanada);
  }, [imagenEmpanada]);

  //********************* RETURN ******************* */
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 mt-4 ">
          <Form validated={inProcess} onSubmit={enviarFormulario} noValidate>
            <div className="card">
              <div className="card-header text-center">
                <span className="titulo">Actualiza tu Vehiculo</span>
              </div>

              
              <div className="card-body">
                <div className="mb-3">
                  <div className="card-body">

                    <div className="mb-3">
                      <Form.Group controlId="nombreEmpanada">
                        <Form.Label>
                          <span className="delete">*</span>
                          nombreEmpanada
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
                          <span className="delete">*</span> tipoEmpanada
                        </Form.Label>

                        <Form.Select
                          size="sm"
                          required
                          name="tipoEmpanada"
                          value={tipoEmpanada}
                          onChange={dobleEnlace}
                        >
                          <option value="">Seleccione un tipo de empanada</option>
                          {arrayTiposEmpanada.map((myTipo: TipoEmpanada) => (
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
                          <span className="delete">
                            {" "}
                            {specificElement
                              ? specificElement.nombreImagen
                              : ""}
                          </span>
                        </Form.Label>
                        <Form.Control
                          size="sm"
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
                <button type="submit" className="btn btn-warning mt-3">
                  -Actualizar-
                </button>
              </div>
            </div>
          </Form>

          
        </div>
      </div>
    </div>
  );
};
