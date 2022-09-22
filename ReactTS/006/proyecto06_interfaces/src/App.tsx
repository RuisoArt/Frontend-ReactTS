import { useState } from "react";
import "./App.css";
import { Father } from "./componets/Father";
import { Header } from "./componets/Header";
import { OperationesForm } from "./componets/Operaciones";

function App() {
  const [operacion, setOperacion] = useState<string>("suma"); //por defecto esta suma
  const [tipo, setTipo] = useState<string>("par");

  return (
    <div className="container-fluid">
      <Father>
        <Header 
          seleccionarOperacion={(seleccion) => {setOperacion(seleccion);}}
          seleccionarTipoNumero={(escoger)=>{setTipo(escoger);}}
        />
        <OperationesForm nombreOperacion={operacion} nombretipoNumero={tipo}/>
      </Father>
    </div>
  );
}

export default App;
