import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/carrusel/Carrusel";
import Ubication from "../components/ubication/Ubication";
import { MyDinamicStorage } from "../components/myLocalStorage/MyDinamicStorage";
import "../css/colors.module.css"; 



const Inicio = () => {
    return (
        <pag>
          <cont>
            <NavigationBar/>
            
            <MyDinamicStorage/>
            <Carrusel style={{max:"50%"}} />
          </cont>
          <div><Ubication/></div>
        <div/>
        </pag>

    
    )
} 

export default Inicio;