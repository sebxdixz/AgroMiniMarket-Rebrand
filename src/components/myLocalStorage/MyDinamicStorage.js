import React, { useState } from 'react';
import { Profile } from './Profile.js';
import './myLocalStorage.css'

export const MyDinamicStorage = () => {
    const [inputText, setInputText] = useState('');
    const [savedData, setSavedData] = useState(false);

    if (localStorage.getItem('nombre')===null) {
   
        const handleInputChange = (e) => {
            const text = e.target.value
            setInputText(text);
            console.log(inputText);

            if(text === '') {
                setSavedData(false);
            }
        }

        const saveData = () => {
            localStorage.setItem('nombre', inputText);
            setSavedData(true);
            setTimeout( function() { window.location.href ="/";})
        }

        return(
            <div id='bigContainer'>
                <div className='iniciado'>
                    <div className = 'container'  id='botonCont1'>
                        <input className = 'input' onChange = { handleInputChange } placeholder = 'Ingresa tu nombre o apodo.'/>
                        <button className = 'button' onClick = { saveData }>Guardar</button>
                    </div>
                </div>
            <div className = 'container2' id='botonCont2'>
                <div className='almacen-local'>
                    {  <Profile /> }
                </div>
            </div>
        </div>
    
        )}
        else{


        const handleInputChange = (e) => {
            const text = e.target.value
            setInputText(text);
            console.log(inputText);

            if(text === '') {
                setSavedData(false);
            }
        }

        const saveData = () => {
            localStorage.setItem('nombre', inputText);
            setSavedData(true);
        }
            return(
                <div className = 'container2' id='botonCont2'>
                    <div className='almacen-local'>
                        {  <Profile /> }
                    </div>
                </div>
            );
        }
    }