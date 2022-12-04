import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Ubication from "../components/ubication/Ubication";
import './About.css'
import { Card, CardContent, CardMedia, CardHeader } from "@mui/material"
import foto1 from "../components/cards/05.jpg"
import foto2 from "../components/cards/10.jpg"
import Footer from "../components/footer/footer";

const About = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <Card style={{ width: '30%' }}>
                    <CardMedia component="img" image={foto1} style={{top: "70px"}}/>
                <CardHeader/>
                <CardContent>
                    <div className='typography' variant="h5" color="primary">
                    AgroMinimarket ofrece a su distinguida clientela productos del agro como; vegetales, verduras, frutos secos, encurtidos y aliños. También ofrece productos propios de un Minimarket como; abarrotes, bebestibles y todo tipo de congelados (vegetales, carnes y mariscos). Nuestro compromiso, es ofrecerle productos del agro de calidad y a precios tan bajos o mejores como aquellos que encontrará en la vega central y ferias libres. Visítenos, no se arrepentirá!!
                    </div>
                </CardContent>
            </Card>
            <Card style={{ width: '60%' , height:"40%"}}>
                    <CardMedia component="img" image={foto2} style={{top: "15px" , height: '100%', width: '100%' }}/>
                <CardHeader/>
                <CardContent>
                    <div className='typography' variant="h5" color="primary">
                    AgrominiMarket aparece como la solucion para los problemas del hogar, sin recurrir a los concurridos supermercados, un espacio seguro, tranquilo y familiar.
                    </div>
                </CardContent>
            </Card>
            </div>
            <Ubication/>
            <Footer/>

        </div>

    );
}

export default About;

