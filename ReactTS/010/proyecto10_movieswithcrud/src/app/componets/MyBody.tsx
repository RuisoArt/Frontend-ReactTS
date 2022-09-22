import { useState } from "react";
import imagen from "../../assets/img/hello.jpg";
import { ARRAY_MOVIES } from "../mocks/equipo-mocks";
import { Movies } from "../models/Movies";
import { MyVerticallyCenteredModal } from "./ModalMovies/MyVerticallyCenteredModal";

export const MyBody = () => {
  const [arrayMovies, setArrayMovies] = useState<Movies[]>(ARRAY_MOVIES);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objectMovies, setObjectMovies] = useState<Movies>(new Movies(0, "", "", "", ""));

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8 mt-5 ">
        <div className="card">
          <img src={imagen} alt="No cargo la bendita imagen"></img>
        </div>
        <div className="card-header text-center mt-4">
          <span className="titulo">Cartelera</span>
        </div>

        <div className="d-flex justify-content-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "3%" }}>codPelicula</th>
                <th style={{ width: "12%" }}>nombrePelicula</th>
                <th style={{ width: "10%" }}>protagonistaPelicula</th>
                <th style={{ width: "10%" }}>generoPelicula</th>
                <th style={{ width: "10%" }}>Imagen Cartelera</th>
                <th style={{ width: "5%" }}>Opciones Item</th>
              </tr>
            </thead>

            <tbody>
              {arrayMovies.map((miMovie: Movies, indice: number) => (
                <tr key={miMovie.codPeicula}>
                  <th>{miMovie.codPeicula}</th>
                  <td>{miMovie.nombrePelicula}</td>
                  <td>{miMovie.protagonistaPelicula}</td>
                  <td>{miMovie.generoPelicula}</td>
                  <td>
                    {miMovie.imagenPelicula !== "" ?(
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalShow(true);
                        setObjectMovies(miMovie);
                      }}
                    >
                      <img
                        src={miMovie.imagenPelicula}
                        alt="No cargo la imagen de la pelicula"
                        className="render"
                      />
                    </a>
                    ):(<div>No hay imagen</div>)
                    }
                  </td>
                  <td>
                    <li className="fa-solid fa-trash-can delete"></li>{" "}
                    <li className="fa-solid fa-edit edit"></li>{" "}
                    <li className="fa-solid fa-rotate refresh"></li>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            variable = {objectMovies}
          />
        </div>
      </div>
    </div>
  );
};
