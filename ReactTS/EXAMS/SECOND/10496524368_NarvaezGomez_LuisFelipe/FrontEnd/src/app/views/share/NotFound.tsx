import { useNavigate } from "react-router-dom";
import imagen from "../../../assets/image/404.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const regresar = useNavigate();

  return (
    <div className="background-notfound">
      <section className="d-flex flex-column align-items-center justify-content-center">
        <img src={imagen} className="img-fluid py-5" alt="Page Not Found"/>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link className="btn" to="#">
          <button
            type="submit"
            className="btn btn-warning"
            id="suma"
            name="suma"
            onClick={() => {
                regresar(-1)
            }}
          >
          Back
          </button>
          </Link>
          <Link className="btn" to="/home-route">
          <button
            type="submit"
            className="btn btn-danger"
            id="suma"
            name="suma"
            onClick={() => {
                //
            }}
          >
          Back Home
          </button>
          </Link>
      </section>
    </div>
  );
};
