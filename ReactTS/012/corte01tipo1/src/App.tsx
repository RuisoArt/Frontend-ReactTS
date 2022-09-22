import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './app/componentes/Header';
import { MyRoutes } from './app/utilidades/rutas/myRoutes';

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
