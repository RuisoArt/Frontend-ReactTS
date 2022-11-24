import { useEffect, useState } from "react";
import Avion from "../../../models/Avion";
import ServicioPrivado from "../../../services/PrivateService";
import ApiBack from "../../../utilities/domains/ApiBack";

export const ListAvion = () => {
    const [arrayAvion, setarrayAvion] = useState<Avion[]>([]);

    const getAvionCareBackend = async () => {
        const result = await ServicioPrivado.petitionGET(ApiBack.GET_PRIVATE_AVION);
        setarrayAvion(result);
    }

    useEffect(()=>{
        getAvionCareBackend();
    },[]);

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Aviones</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de Aviones</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Orden</th>
                  <th style={{ width: "50%" }}>Compañia</th>
                  <th style={{ width: "10%" }}>Tipo</th>
                  <th style={{ width: "10%" }}>Disponibilidad</th>
                  <th className="text-center" style={{ width: "10%" }}>
                    Usuarios
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrayAvion.map((myElement, count)=>(
                    <tr key={count}>
                        <td>{count+1}</td>
                        <td>{myElement.avionCompany}</td>
                        <td>{myElement.avionType === 1? "Comercial": 
                              myElement.avionType === 2? "Carga":
                              myElement.avionType === 3? "Militar":
                              myElement.avionType === 4? "Privado":"No seleccionado"}</td>
                        <td>{myElement.avionAvailability === 1? "Publico":"Privado"}</td>
                        <td className="text-center">{myElement.cantidadAviones}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
