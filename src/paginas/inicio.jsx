import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Carrusel from "../components/Carrusel/Carrusel.jsx";
import { MyDinamicStorage } from "../components/myLocalStorage/MyDinamicStorage";
import "../css/colors.module.css"; 
import But from "../components/cards/photos"
import Footer from "../components/footer/footer"


const Inicio = () => {
    return (
        <div className="pag">
          <div className="cont">
            <NavigationBar/>
            <MyDinamicStorage/>
            <Carrusel style={{max:"50%"}} />
            <But/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer/>
          </div>
        </div>

    
    )
} 

export default Inicio;