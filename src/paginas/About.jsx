import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import {CartaChica, CartaFoto} from "../components/cards/Card.jsx";
var text1 = "La tienda de la gente linda";
const Carta1 = CartaChica(text1)


const About = () => {
    return (
        <div>
            <NavigationBar/>
            <Carta1/>
        </div>
    );
}

export default About;

