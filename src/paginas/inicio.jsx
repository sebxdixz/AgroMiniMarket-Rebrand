import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/carrusel/Carrusel";
import Ubication from "../components/ubication/Ubication";
import { MyDinamicStorage } from "../components/myLocalStorage/MyDinamicStorage";
import "../css/colors.module.css"; 


const Inicio = () => {
    return (
        <pag>
            <NavigationBar/>
            <MyDinamicStorage/>
          <h2>
            <Carrusel/>
          </h2>
          {/* <div><Ubication/></div> */}
        <div/>
        </pag>
    )
} 

export default Inicio;