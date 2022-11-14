import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/carrusel/Carrusel";
import { MyDinamicStorage } from "../components/myLocalStorage/MyDinamicStorage";
import "../css/colors.module.css"; 
import But from "../components/cards/photos"


const Inicio = () => {
    return (
        <div className="pag">
          <div className="cont">
            <NavigationBar/>
            <MyDinamicStorage/>
            <Carrusel style={{max:"50%"}} />
                <But/>
          </div>
        </div>

    
    )
} 

export default Inicio;