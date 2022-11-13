import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/carrusel/Carrusel";
import Ubication from "../components/ubication/Ubication";
import { MyDinamicStorage } from "../components/myLocalStorage/MyDinamicStorage";
import "../css/colors.module.css"; 

import  AllProducts  from "../bbdd-productos/allProducts";


const Inicio = () => {
    return (
        <div className="pag">
            <NavigationBar/>
            <br/>
            <div>
              <AllProducts/>
            </div>
            <br/>
            <MyDinamicStorage/>
          <h2>
            <Carrusel/>
          </h2>
          <div><Ubication/></div>
        <div/>
        </div>
    )
} 

export default Inicio;