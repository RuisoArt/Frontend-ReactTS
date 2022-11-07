import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { VehiculoMarca } from "../../interface/VehiculoMarca";
import { ARRAY_MARCAS } from "../utilities/domains/DomVehiculoMarca";
import { ARRAY_CARS } from "../mocks/equipo-mocks";
import noFoto from "../../assets/img/file.png";
import { useFormulario } from "../utilities/hooks/useFormulario";
import { Cars } from "../models/Cars";
import { ConvertImage64 } from "../utilities/function/ConvertImage64";

export const CreateCar = () => {
  type formHtml = React.FormEvent<HTMLFormElement>;

  const [arregloMarcas] = useState<VehiculoMarca[]>(ARRAY_MARCAS);
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [arrayCars, setArrayCars] = useState<Cars[]>(ARRAY_CARS);
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
      const nuevoCodigo = arrayCars.length + 1;
      objeto.codVehiculo = nuevoCodigo;
      objeto.imagenVehiculo = imgBase64;
      objeto.marcaVehiculo = Number(marcaVehiculo);

      arrayCars.push(objeto);

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

  // Two Data Binding = Hooks

  let {
    codVehiculo,
    marcaVehiculo,
    placaVehiculo,
    modeloVehiculo,
    imagenVehiculo,
    nombreImagenVehiculo,
    dobleEnlace,
    objeto,
  } = useFormulario<Cars>(new Cars(0, 0, "", 0, "", ""));

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
                      <Form.Group controlId="placaVehiculo">
                        <Form.Label>
                          <span className="delete">*</span>
                          Placa del Vehiculo
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          name="placaVehiculo"
                          required
                          value={placaVehiculo}
                          onChange={dobleEnlace}
                        />
                      </Form.Group>
                    </div>

                    <div className="mb-3">
                      <Form.Group controlId="modeloVehiculo">
                        <Form.Label>
                          <span className="delete">*</span>
                          Modelo del Vehiculo
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          required
                          type="number"
                          name="modeloVehiculo"
                          value={modeloVehiculo}
                          onChange={dobleEnlace}
                        />
                      </Form.Group>
                    </div>

                    <div className="mb-3">
                      <Form.Group controlId="marcaVehiculo">
                        <Form.Label>
                          <span className="delete">*</span> Marca del Vehiculo
                        </Form.Label>

                        <Form.Select
                          size="sm"
                          required
                          name="marcaVehiculo"
                          value={marcaVehiculo}
                          onChange={dobleEnlace}
                        >
                          <option value="">Seleccione una marca</option>
                          {arregloMarcas.map((miMarca: VehiculoMarca) => (
                            <option key={miMarca.codigo} value={miMarca.codigo}>
                              {miMarca.nombreMarca}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      
                    </div>
                    
                    <div className="form-group mb-3 ">
                      <Form.Group controlId="imagenVehiculo">
                        <Form.Label>
                          <span className="delete">*</span>
                          Imagen del Vehiculo
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          required
                          type="file"
                          name="imagenVehiculo"
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
                  -Ingresar Vehiculo- °u°
                </button>
              </div>
            </div>
          </Form>

          <div>
            <span> Placa: {objeto.placaVehiculo}</span>
            <br />
            <span> Modelo: {objeto.modeloVehiculo}</span>
            <br />
            <span> Marca: {objeto.marcaVehiculo}</span>
            <br />
            <span> NombreImagen: {objeto.nombreImagenVehiculo}</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
