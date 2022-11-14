import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import CartaChica from "../components/cards/Card.jsx";
import Ubication from "../components/ubication/Ubication";
import GroupExample from "../components/cards/Outro.jsx";

const About = () => {
    return (
        <div>
            <NavigationBar/>
            <CartaChica />
            <Ubication/>
            <GroupExample/>
        </div>
    );
}

export default About;

