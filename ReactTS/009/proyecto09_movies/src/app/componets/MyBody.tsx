import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { ARRAY_MOVIES } from "../mocks/equipo-mocks";
import { Movies } from "../models/Movies";

export const MyBody = () => {
  const [arrayMovies, setArrayMovies] = useState<Movies[]>(ARRAY_MOVIES);

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
                <th style={{ width: "3%" }}>codPelicula</th>
                <th style={{ width: "17%" }}>nombrePelicula</th>
                <th style={{ width: "15%" }}>protagonistaPelicula</th>
                <th style={{ width: "10%" }}>generoPelicula</th>
                <th style = {{width:"5%"}}>Opciones Item</th>
              </tr>
            </thead>

            <tbody>
              {arrayMovies.map((miMovie: Movies, indice: number) => (
                <tr>
                  <th>{miMovie.codPeicula}</th>
                  <td>{miMovie.nombrePelicula}</td>
                  <td>{miMovie.protagonistaPelicula}</td>
                  <td>{miMovie.generoPelicula}</td>
                  <td><li className="fa-solid fa-trash-can delete"></li>{" "}
                  <li className="fa-solid fa-edit"></li>{" "}
                  <li className="fa-solid fa-rotate"></li>{" "}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
