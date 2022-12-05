import React from 'react'
import './apis.css'

const googlesheet = () => {


  //variables:
  const datosMostrados = 10;
  const url = 'https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';
  let i = 0;
  const familia1 = "Todos"; //Posibilidades: (Todos, Frutos, Bebestibles, Insumos, Verduras, Abarrotes, Aliños)
  //evento:
  document.addEventListener("DOMContentLoaded", llamarApi());
  //funciones:
  async function llamarApi() {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const dato = JSON.stringify(data["data"]);

    // console.log("dato :", dato);

    // setUsuarios(JSON.parse(dato));
    // setTablaUsuarios(JSON.parse(dato));

    mostrarHtml(JSON.parse(dato))
  }
  function mostrarHtml(datos) {
    const respuestas = document.querySelector("#respuestas");
    console.log(respuestas);
    for (let item in datos) {

      const row = document.createElement('tr');
      if (datos[item].Precio_Venta === '' || datos[item].Precio_Venta === '$ -') {

      } else {
        if (i >= datosMostrados) { } else {

          if (((datos[item].Familia).toLowerCase()) === (familia1.toLowerCase()) || familia1.toLocaleLowerCase() === "todos") {
            i++;
            console.log(i);
            console.log(datos[item].Familia);
            row.innerHTML = (`
              <td>${datos[item].Familia}</td>
              <td>${datos[item].Producto}</td>
              <td>${datos[item].Precio_Venta}</td>
              <td>${datos[item].Cantidad}</td>
              
              `)
            respuestas.appendChild(row);
          }
        }
      }

    }

  }
  return (

    <div className='TablaProductosActualizados'>
      <h2 className='tituloTabla'>Productos de {familia1} con los que se trabaja</h2>

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

            </tbody>
          </table>
        </div>
      </div>
      <script src="googlesheet.js"></script>
    </div>
  )
}

export default googlesheet