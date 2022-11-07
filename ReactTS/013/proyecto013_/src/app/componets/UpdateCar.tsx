import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { VehiculoMarca } from "../../interface/VehiculoMarca";
import { ARRAY_MARCAS } from "../utilities/domains/DomVehiculoMarca";
import { ARRAY_CARS } from "../mocks/equipo-mocks";
import noFoto from "../../assets/img/file.png";
import { useFormulario } from "../utilities/hooks/useFormulario";
import { Cars } from "../models/Cars";
import { ConvertImage64 } from "../utilities/function/ConvertImage64";

export const UpdateCar = () => {
//actualizar parametros  
let {code} = useParams();
const specificCar = ARRAY_CARS.find((miCar)=>{
    return miCar.codVehiculo === Number(code);
});


  type formHtml = React.FormEvent<HTMLFormElement>;

  const [arregloMarcas] = useState<VehiculoMarca[]>(ARRAY_MARCAS);
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [arrayCars, setArrayCars] = useState<Cars[]>(ARRAY_CARS);
  const [imgBase64, setimgBase64] = useState<string>("");
  const navegate = useNavigate();

  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [imgSmall, setImgSmall] = useState<string>("");

  const updateMyCar = ()=>{
    const limit = arrayCars.length;

    for(let i=0; i<limit; i++){
      const comparar = arrayCars[i].codVehiculo;

      if(comparar === specificCar?.codVehiculo){
          arrayCars[i] = new Cars(
            //trae del hook que creamos abajo
            codVehiculo,
            marcaVehiculo,
            placaVehiculo,
            modeloVehiculo,
            imgBase64,
            nombreImagenVehiculo === "" ? specificCar.nombreImagenVehiculo : nombreImagenVehiculo
          )
      }
    }
  };

  const enviarFormulario = (fh: formHtml) => {
    fh.preventDefault();
    const formulario = fh.currentTarget;

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProcess(true);
    } else {
      updateMyCar();
      navegate("/administrar");
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
  } = useFormulario<Cars>(new Cars(
    specificCar ? specificCar.codVehiculo: 0,
    specificCar ? specificCar.marcaVehiculo: 0,
    specificCar ? specificCar.placaVehiculo: "",
    specificCar ? specificCar.modeloVehiculo: 0,
    specificCar ? specificCar.imagenVehiculo: "",
    ""));
 
  useEffect(()=>{
    setImgSmall(imagenVehiculo);
    setImagenMiniatura(imagenVehiculo);
  },[imagenVehiculo]);

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
                      <Form.Group controlId="nombreImagenVehiculo">
                        <Form.Label>
                          <span className="delete">*</span>
                          Imagen del Vehiculo
                          <span className="delete">{" "}{specificCar ? specificCar.nombreImagenVehiculo: ""}</span>
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          type="file"
                          name="nombreImagenVehiculo"
                          value={nombreImagenVehiculo}
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
