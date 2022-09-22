import './App.css';
import logoRaspBerry from "./assets/img/raspberry-pi-logo.png";

function App() {
  return (
    <div className="d-flex justify-content-center mt-5 generalProperties">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2 className="titulo">Titulo en H2 HTML5</h2><br/>
          <img src={logoRaspBerry} alt="error imagen"></img>
          <p>
            <i className="fa-solid fa-check fa-lg checkInit"></i>
            Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo <br/>
            Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo <br/>
            Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo <br/>
            Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo <br/>
          </p>
          <button className="btn btn-outline-light" type="button">Boton Generico</button>
        </div>
    </div>
  );
}

export default App;
