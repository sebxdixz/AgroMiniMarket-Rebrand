import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/carrusel/Carrusel";
import Ubication from "../components/ubication/Ubication";
import ProductData from "../components/catalog/Catalog";

const Inicio = () => {
    return (
        <pag>
            <NavigationBar/>
          <h2>
            <Carrusel/>
          </h2>

          <div><Ubication/></div>

          <div className='ProductosPaginaPrincipal'> 
            <h2 className='catalogoTitle'>Productos Disponibles en Tienda</h2>
            <ProductData/>
          </div>
        <div/>
        </pag>
    )
} 

export default Inicio;