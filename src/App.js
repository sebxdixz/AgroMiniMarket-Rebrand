import './App.css';
import "./css/colors.module.css";
import { Routes, Route } from "react-router-dom";
import About from "./paginas/About";
import Inicio from './paginas/Inicio';
import Producto from "./paginas/Producto";

import React from 'react';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Conocenos" element={<About />} />
        <Route path="/Productos" element={<Producto />} />
    </Routes>
    </div>
  );
}

export default App;
