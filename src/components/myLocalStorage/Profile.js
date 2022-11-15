import React, { useEffect, useState } from 'react'
import './myLocalStorage.css'
import {Grid, Card, CardContent, CardHeader} from '@mui/material';

export const Profile = () => {

    const [nombre, setNombre] = useState('');

    const getData = () => {
        return localStorage.getItem('nombre');
    }

    useEffect(() => {
        setNombre(getData());
    }, []);

    return (
        <Grid container spacing={1}>
            <Card style={{ width: '93%', position:"static" }}>
            <CardHeader/>
            <CardContent>
                <div className='typography' font-size="50px" color="primary">
                ¡Hola { nombre }! Tenemos productos para ti.
                </div>
            </CardContent>
        </Card>
        </Grid>
    )
}