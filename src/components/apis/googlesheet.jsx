
import React from 'react'


const googlesheet = () => {
  //variables:
  const url ='https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';

  //evento:
  document.addEventListener("DOMContentLoaded", llamarApi());
  //funciones:
  async function llamarApi(){
    const respuesta = await fetch( url )
    const data =  await respuesta.json()
    const dato=JSON.stringify(data["data"])
    mostrarHtml(JSON.parse(dato))
  }
  function mostrarHtml(datos){
    const respuestas = document.querySelector("#respuestas")
    
    
    for(let item in datos){

      const row = document.createElement('tr');
      if(datos[item].Precio_Venta===''||datos[item].Precio_Venta==='$ -'){

      }else{
      row.innerHTML = (`
        <td>${datos[item].Familia}</td>
        <td>${datos[item].Producto}</td>
        <td>${datos[item].Precio_Venta}</td>
        <td>${datos[item].Cantidad}</td>
        `)
      }
      respuestas.appendChild(row);
      
    }
  }
  return (
    
    <div className='TablaProductosActualizados'>
      <div className="row">
        <div className="col-8 offset-2">
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Produto</th>
                <th>Precio</th>
                <th>Cantidad/Descripcion</th>
              </tr>
            </thead>
            <tbody id='respuestas' className='cuerpoTabla'>
              <tr>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <script src="googlesheet.js" defer></script> */}
    </div>
  )
}

export default googlesheet