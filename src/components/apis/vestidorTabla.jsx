const vestidorTabla = () => {
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
    // console.log(data)
    mostrarHtml([data])
  }
  function mostrarHtml(datos){
    //Aqui
    // El problema esta acá, No recorre datos de la manera que debería, datos lo imprimo por console log en llamar api 
    // para que puedas verlo en inspeccionar. Estamos casi casi para finalizar.
    // Lo otro es que podríamos mostrar pocos productos para que no salgan 2500 pa abajo.
    console.log(datos)
    for(let item in (datos[0])["data"]){
      const row = document.createElement('tr');
      row.innerHTML = (`
        <td>${item.Familia}</td>
        <td>${item.Producto}</td>
        <td>${item.Precio_Venta}</td>
        `)
      
      respuesta.appendChild(row);
    }
  }
  return 
}

export default vestidorTabla