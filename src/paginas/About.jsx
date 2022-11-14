import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Ubication from "../components/ubication/Ubication";
import './About.css'
const About = () => {
    return (
        <div>
            <NavigationBar/>
            <div className="text"><h4>“Agro Minimarket ofrece a su distinguida clientela productos del agro como; vegetales, verduras, frutos secos, encurtidos y aliños. También ofrece productos propios de un Minimarket como; abarrotes, bebestibles y todo tipo de congelados (vegetales, carnes y mariscos). Nuestro compromiso, es ofrecerle productos del agro de calidad y a precios tan bajos o mejores como aquellos que encontrará en la vega central y ferias libres. Visítenos, no se arrepentirá!!”</h4></div>
            <Ubication/>
        </div>
        
    );
}

export default About;

