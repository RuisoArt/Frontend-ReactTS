import { useEffect, useState } from "react";
import Profile from "../../../models/Profile";
import ServicioPrivado from "../../../services/PrivateService";
import ApiBack from "../../../utilities/domains/ApiBack";

export const ListProfile = () => {
    const [arrayProfile, setArrayProfile] = useState<Profile[]>([]);
    const getProfilesCareBackend = async () => {
        const result = await ServicioPrivado.petitionGET(ApiBack.GET_PRIVATE_PROFILE);
        setArrayProfile(result);
    }

    useEffect(()=>{
        getProfilesCareBackend();
    },[]);

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Perfiles</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de perfiles</li>
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
                  <th style={{ width: "50%" }}>Nombre perfil</th>
                  <th style={{ width: "15%" }}>Estado</th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Usuarios
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrayProfile.map((myProfile, count)=>(
                    <tr key={count}>
                        <td>{count+1}</td>
                        <td>{myProfile.profileName}</td>
                        <td>{myProfile.profileState === 1? "Enable":"Disable"}</td>
                        <td className="text-center">{myProfile.cantidadUsuarios}</td>
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
