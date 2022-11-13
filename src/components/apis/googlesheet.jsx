
import React from 'react'

const googlesheet = () => {
  //variables:
  const url ='https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';
  const respuesta = document.querySelector("#respuesta")

  //evento:
  document.addEventListener("DOMContentLoaded", llamarApi());
  //funciones:
  async function llamarApi(){
    const respuesta = await fetch( url )
    const data = await respuesta.json()
    console.log(typeof data)
    console.log(data)
    mostrarHtml(data)
  }
  function mostrarHtml(datos){
    //Aqui
    // El problema esta acá, No recorre datos de la manera que debería, datos lo imprimo por console log en llamar api 
    // para que puedas verlo en inspeccionar. Estamos casi casi para finalizar.
    // Lo otro es que podríamos mostrar pocos productos para que no salgan 2500 pa abajo.

    datos.forEach(item => {
      const row = document.createElement('tr');
      console.log(item.Familia);
      row.innerHTML = `
      <td>${item.Familia}</td>
      <td>${item.Producto}</td>
      <td>${item.Precio_Venta}</td>
      `
      respuesta.appendChild(row);
    });
  }

  // console.log(data)
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
              </tr>
            </thead>
            <tbody id='respuesta'>
              <tr>
                <td>Bebestible</td>
                <td>Bebida</td>
                <td>$1.490</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default googlesheet