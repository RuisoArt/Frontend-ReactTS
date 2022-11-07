React with typescript

1. Instalar node.
2. Verificar versiones.
    					node -v
    					npm -v
3. Actualizar version a npm@8.15.1
   					 sudo npm i -g npm@8.15.1
4. Instalar typescript
    					sudo npm i -g typescript
5. Verificar version typescript
    					tsc --v
6. Verirficar version de react
    					npm view react version
7. Crear aplicaciones con react
    					npm install -g create-react-app

("---------------------------------------------------------------------------------------")

Firefox
Extensiones
		React Developer Tools

Crear un proyecto
1. Crear proyecto con plantilla typescript
    						npx create-react-app project0 --template typescript
2. Dar permisos al proyecto(lINUX)
    						sudo chown -R juana:juana app-hola-mundo/




Proyecto
	npm i

	npm i @fortawesome/fontawesome-free
        npm i @popperjs/core
        npm i @testing-library/jest-dom
        npm i @testing-library/react
        npm i @testing-library/user-event
        npm i @types/jest
        npm i @types/node
        npm i @types/react
        npm i @types/react-dom
        npm i bootstrap
        npm i js-sha512
        npm i react
        npm i react-bootstrap
        npm i react-dom
        npm i react-router-dom
        npm i react-scripts
        npm i typescript
        npm i web-vitals


Cambiar puerto:
package.json
"scripts": {
    "start": "set PORT=8088 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },



Cambios al INDEX.tsx


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



cambios en App.tsx




import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./app/components/Header";
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












Mocks datos de plantilla

Estructura del proyecto
src >> App.tsx
Cambiar texto

Nav enlace imagen titulo -> Crear >> formulario Puerto -> placa del vehiculo, modelo, foto del vehiculo
                         -> Combo -> Vehiculos >> Catálogo
                                   -> Administrar
                                    -> Actualizar
                         Minimo 5 imágenes
