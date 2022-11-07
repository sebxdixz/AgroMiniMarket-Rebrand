import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import "./css/colors.module.css";
import Carrusel from "./components/carrusel/Carrusel";  
import ProductData from './components/catalog/Catalog';
import Ubication from './components/ubication/Ubication';
import { Routes, Route } from "react-router-dom";
import Conocenos from "./Conocenos"; 

import React from 'react';


function App() {
  return (
    <div className="App">

      <div>

        <NavigationBar/>
          <Routes>
                  {/* <Route path="/" element={<App />} /> */}
                  <Route path="/Conocenos" element={<Conocenos />} />
          </Routes>

        
        
        <div className='CarruselApp'>
          <h2>
            <Carrusel/>
          </h2>

          <div><Ubication/></div>

          <div className='ProductosPaginaPrincipal'> 
            <h2 className='catalogoTitle'>Productos Disponibles en Tienda</h2>
            <ProductData/>
          </div>
        
        
        
          <div className='CarruselApp'>
            <h2>
              <Carrusel/>
            </h2>
            <div><Ubication/></div>
            <div className='ProductosPaginaPrincipal'> 
              <h2 className='catalogoTitle'>Productos Disponibles en Tienda</h2>
              <ProductData/>
            </div>
          </div>
          <footer>              
          </footer>
        
        </div>
      </div>
    </div>
  );
}

export default App;
