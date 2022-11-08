import React, { useEffect, useState } from 'react'
import './myLocalStorage.css'

export const Profile = () => {

    const [nombre, setNombre] = useState('');

    const getData = () => {
        return localStorage.getItem('nombre');
    }

    useEffect(() => {
        setNombre(getData());
    }, []);

    return (
        <div>
            <h3>¡Hola { nombre }! Tenemos productos para ti.</h3>
        </div>
    )
}