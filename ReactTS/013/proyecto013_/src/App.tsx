import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./app/componets/Header";
import { MyRoutes } from "./app/utilities/route/MyRoutes";


function App() {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header/>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
