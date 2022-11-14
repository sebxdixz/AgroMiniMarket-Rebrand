import React from 'react'
import './ubication.css'

const Ubication = () => {

  return (

    <div className='FatherUbication'>

        <h2 className='tituloUbication'>Nos ubicamos en: <span  >Las Hualtatas 7523, Vitacura</span></h2>

        <iframe className='UbicacionAgro' title='Agrominimarket' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2781625601597!2d-70.56062098480231!3d-33.38990
        6480791275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfa50203f087%3A0xabb8c400a45a5875!2s
        Agrominimarket!5e0!3m2!1ses!2scl!4v1667809304674!5m2!1ses!2scl" width="93%" height="420" style={{ border:0}} 
         loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
    
  )
}

export default Ubication