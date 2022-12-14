import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { ARRAY_EQUIPO } from "../mocks/equipo-mocks";
import { Equipo } from "../models/Equipo";

export const MyBody = () => {
  const [arrayEquipo, setArrayEquipo] = useState<Equipo[]>(ARRAY_EQUIPO);

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        <div className="card">
          <img src={imagen} alt="No cargo la bendita imagen"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">My Body</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "3%" }}>codEquipo</th>
                <th style={{ width: "17%" }}>nombreEquipo</th>
                <th style={{ width: "10%" }}>ciudadEquipo</th>
                <th style={{ width: "10%" }}>estadoEquipo</th>
                <th style={{ width: "10%" }}>fotoEquipo</th>
              </tr>
            </thead>

            <tbody>
              {arrayEquipo.map((miEquipo: Equipo, indice: number) => (
                <tr>
                  <th>{miEquipo.codEquipo}</th>
                  <td>
                    <span
                      style={{
                        textDecoration: miEquipo.estadoEquipo
                          ? ""
                          : "line-through"
                      }}
                    >
                      {miEquipo.nombreEquipo}
                    </span>
                  </td>
                  <td>{miEquipo.ciudadEquipo}</td>
                  <td><span style={{}}>{miEquipo.estadoEquipo}</span></td>
                  <td>{miEquipo.fotoEquipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
