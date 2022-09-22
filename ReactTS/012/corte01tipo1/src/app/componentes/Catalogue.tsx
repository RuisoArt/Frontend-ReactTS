import { useState } from "react";
import { ARRAY_CAMISAS } from "../mocks/camisa-mock";
import { Camisa } from "../modelos/camisa";
import { CamisaMarca } from "../modelos/interface/camisamarca";
import { CamisaTalla } from "../modelos/interface/camisatalla";
import { ARRAY_MARCAS } from "../utilidades/dominios/dommarca";
import { ARRAY_TALLAS } from "../utilidades/dominios/domtalla";
import {MyVerticallyCenteredModal} from "./VerticallModal/MyVerticallyCenteredModal"

export const Catalogue= () => {
    const [arrayCamisas, setArrayCamisas] = useState<Camisa[]>(ARRAY_CAMISAS);
    const [arrayMarcas, setArrayMarcas] = useState<CamisaMarca[]>(ARRAY_MARCAS);
    const [arrayTallas, setArrayTallas] = useState<CamisaTalla[]>(ARRAY_TALLAS);

    const [modalShow, setModalShow] = useState<boolean>(false);

    const [objectTShirt, setObjectTirt] = useState<Camisa>(new Camisa(0,0,0,"","",""));
    
    // Metodo para cargar marcaCamisa
    const cargarMarca = (elemento: number): any => {
        console.log("llega esta codigo de marca: " + elemento);
        let numero = "default";
    
        arrayMarcas.map((my: CamisaMarca) => {
          if (elemento === my.codigoMarca) {
            numero = my.nombreMarca;
            console.log("si el codigo es [",my.codigoMarca,"] la marca seria [",my.nombreMarca,"]");
            console.log("Asi pues retornara: [", numero, "]");
            
          } else {
            console.log("Si no es de la lista retorname: [", elemento, "]");
            return elemento;
          }
        });
        console.log("Retorna entonces: [", numero, "]");
        return numero;
      };

    // Metodo para cargar tallas
    const cargarTallas = (elemento: number): any => {
        console.log("llega esta codigo de marca: " + elemento);
        let numero = "default";
    
        arrayTallas.map((my: CamisaTalla) => {
          if (elemento === my.codigoTalla) {
            numero = my.nombreTalla;
            console.log("si el codigo es [",my.codigoTalla,"] la marca seria [",my.nombreTalla,"]");
            console.log("Asi pues retornara: [", numero, "]");
            
          } else {
            console.log("Si no es de la lista retorname: [", elemento, "]");
            return elemento;
          }
        });
        console.log("Retorna entonces: [", numero, "]");
        return numero;
      };

      // AHORA SI MI RETURN ALV
    return(
        <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        


        <div className="card-header text-center mt-4">
          <span className="titulo">Catalogo Camisetas</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>codCamisa</th>
                <th style={{ width: "20%" }}>marcaCamisa</th>
                <th style={{ width: "20%" }}>tallaCamisa</th>
                <th style={{ width: "20%" }}>colorCamisa</th>
                <th style={{ width: "20%" }}>base64ImagenCamisa</th>
              </tr>
            </thead>

            <tbody>
              {arrayCamisas.map((miCami: Camisa, indice: number) => (
                <tr key={miCami.codCamisa}>
                  <td>{miCami.codCamisa}</td>
                  <td>{cargarMarca(miCami.marcaCamisa)}</td>
                  <td>{cargarTallas(miCami.tallaCamisa)}</td>
                  <td>{miCami.colorCamisa}</td>
                  <td>
                    {miCami.base64ImagenCamisa !== "" ? (
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setModalShow(true);
                          setObjectTirt(miCami);
                        }}
                      >
                        <img
                          src={miCami.base64ImagenCamisa}
                          alt="No cargo la imagen del Vehiculo"
                          className="render"
                        />
                      </a>
                    ) : (
                      <div>No hay imagen</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            variable={objectTShirt}
          />

        </div>
      </div>
    </div>
    )
};