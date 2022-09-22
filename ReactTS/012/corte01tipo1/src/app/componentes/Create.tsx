import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ARRAY_CAMISAS } from "../mocks/camisa-mock";
import { Camisa } from "../modelos/camisa";
import { CamisaMarca } from "../modelos/interface/camisamarca";
import { CamisaTalla } from "../modelos/interface/camisatalla";
import { ARRAY_MARCAS } from "../utilidades/dominios/dommarca";
import { ARRAY_TALLAS } from "../utilidades/dominios/domtalla";
import { ConvertImage64 } from "../utilidades/funciones/ConvertImage64";
import { useFormulario } from "../utilidades/hooks/useFormulario";

import noFoto from "../assets/oops.jpg";

export const Create = () => {
  type formHtml = React.FormEvent<HTMLFormElement>;

  const [arrayCamisas, setArrayCamisas] = useState<Camisa[]>(ARRAY_CAMISAS);
  const [arrayMarcas, setArrayMarcas] = useState<CamisaMarca[]>(ARRAY_MARCAS);
  const [arrayTallas, setArrayTallas] = useState<CamisaTalla[]>(ARRAY_TALLAS);

  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [imgBase64, setimgBase64] = useState<string>("");
  
  const navegate = useNavigate();

  

  const enviarFormulario = (fh: formHtml) => {
    fh.preventDefault();
    const formulario = fh.currentTarget;

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProcess(true);
    } else {
      //la siguiente linea deberia darmela el backend
      const nuevoCodigo = arrayCamisas.length + 1;
      console.log(arrayCamisas);
      objeto.codCamisa = nuevoCodigo;
      objeto.base64ImagenCamisa = imgBase64;
      console.log(objeto);
      console.log(nuevoCodigo);
      console.log("esto es un aja",arrayMarcas);
      objeto.tallaCamisa = Number(tallaCamisa);
      objeto.marcaCamisa = Number(marcaCamisa);
      
      
      arrayCamisas.push(objeto);
      
      setInProcess(false); 
      navegate("/catalogo");
    }
  };

  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];

    setImagenMiniatura(URL.createObjectURL(imagen));

    dobleEnlace(e);
    const myBase64 = await ConvertImage64(imagen);

    setimgBase64(String(myBase64));
  };

  let {
    codCamisa,
    marcaCamisa,
    tallaCamisa,
    colorCamisa,
    nombreImagencamisa,
    base64ImagenCamisa,
    dobleEnlace,
    objeto
  } = useFormulario<Camisa>(new Camisa(0, 0, 0, "", "", ""));

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 mt-4 ">
          <Form validated={inProcess} onSubmit={enviarFormulario} noValidate>
            <div className="card">
              <div className="card-header text-center">
                <span className="titulo">Ingrese nuevo Vehiculo</span>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <div className="card-body">

                    <div className="mb-3">
                      <Form.Group controlId="colorCamisa">
                        <Form.Label>
                          <span className="delete">*</span>
                          Color de la Camisa{" "}
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          required
                          type="text"
                          name="colorCamisa"
                          value={colorCamisa}
                          onChange={dobleEnlace}
                        />
                      </Form.Group>
                    </div>

                    <div className="mb-3">
                      <Form.Group controlId="tallaCamisa">
                        <Form.Label>
                          <span className="delete">*</span> Talla de la camisa
                        </Form.Label>

                        <Form.Select
                          size="sm"
                          required
                          name="tallaCamisa"
                          value={tallaCamisa}
                          onChange={dobleEnlace}
                        >
                          <option value="">Seleccione una Talla</option>
                          {arrayTallas.map((miTalla: CamisaTalla) => (
                            <option
                              key={miTalla.codigoTalla}
                              value={miTalla.codigoTalla}
                            >
                              {miTalla.nombreTalla}
                              
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </div>
                    
                    <div className="mb-3">
                      <Form.Group controlId="marcaCamisa">
                        <Form.Label>
                          <span className="delete">*</span> Marca de la camisa
                        </Form.Label>

                        <Form.Select
                          size="sm"
                          required
                          name="marcaCamisa"
                          value={marcaCamisa}
                          onChange={dobleEnlace}
                        >
                          
                          <option value="">Seleccione una Marca</option>
                          {
                          arrayMarcas.map((miMarca: CamisaMarca) => (
                            
                            <option
                              key={miMarca.codigoMarca}
                              value={miMarca.codigoMarca}
                              
                            >
                              {miMarca.nombreMarca}
                              
                            </option>
                          
                          ))
                          }
                          
                        </Form.Select>
                      </Form.Group>
                    </div>
                    

                    <div className="form-group mb-3 ">
                      <Form.Group controlId="base64ImagenCamisa">
                        <Form.Label>
                          <span className="delete">*</span>
                          Imagen del Vehiculo
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          required
                          type="file"
                          name="base64ImagenCamisa"
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
                  -Ingresar Camiseta- °u°
                </button>
              </div>

            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
