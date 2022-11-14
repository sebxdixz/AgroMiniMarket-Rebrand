import React from 'react';
import {Grid, Card, CardContent, CardHeader, CardMedia} from '@mui/material';
import foto1 from "./05.jpg"
import foto2 from "./02.jpg"
import foto3 from "./07.jpg"
import "./card.css"


    function But (){
        return(
            <Grid container spacing={0}> 
            <Card>
                <CardMedia component="img" image={foto1}/>
                <CardHeader/>
                <CardContent>
                    <typography variant="h5" color="primary">
                        Bienvenido al lugar donde los sueños se hacen realidad
                    </typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" image={foto2}/>
                <CardHeader/>
                <CardContent>
                    <typography variant="h5" color="primary">
                        Variedad de frutas y verduras para tu vida sana
                    </typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" image={foto3}/>
                <CardHeader/>
                <CardContent>
                    <typography variant="h5" color="primary">
                        Bienvenido al lugar donde los sueños se hacen realidad
                    </typography>
                </CardContent>
            </Card>
            </Grid>
        );
    }
    export default But;