import { BrowserRouter } from "react-router-dom";
import {Suspense} from "react";
import "./App.css";
//import { Header } from "./app/components/Header";
//import { MyRoutes } from "./app/utilities/route/MyRoutes";
import {CompletRouting} from "./app/utilities/routes/CompletRouting";
import { Header } from "./app/components/Header";

import "./assets/css/style.css";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";

const loading = (<div>Loading, please wait mother foca ...</div>);

function App() {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Header/>
          <CompletRouting/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;