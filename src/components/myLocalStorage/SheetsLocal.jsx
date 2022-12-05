import React from "react";
// import "./myLocalStorage.css";
// import './apis.css'


const sheetsLocal = () => {
    // const [inputText, setInputText] = useState(""); //borrar
    // const [savedData, setSavedData] = useState(false); //

    const datosMostrados = 100;
    let i = 0;
    const familia1 = localStorage.getItem("opciones")===null ? "Productos" : localStorage.getItem("opciones"); //Posibilidades: (Productos, Frutos, Bebestibles, Insumos, Verduras, Abarrotes, Aliños)

    //variables:

    const url = 'https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';

    //evento:
    document.addEventListener("DOMContentLoaded", llamarApi());
    //funciones:
    async function llamarApi() {
        const respuesta = await fetch(url);
        // console.log(respuesta);

        const data = await respuesta.json();
        const dato = JSON.stringify(data["data"]);
        // setUsuarios(JSON.parse(dato));
        // setTablaUsuarios(JSON.parse(dato));

        // console.log(dato);

        saveData(dato)
        mostrarHtml(JSON.parse(localStorage.getItem("tablaProductos"))); //
    }

    const saveData = (datos) => {
        if (localStorage.getItem("tablaProductos") === null) {
            // console.log(datos);
            // let arreglo= new Array();
            // for (let item in datos) {
            //     arreglo["Familia"].push([datos[item].Familia])
            //     arreglo["Producto"].push([datos[item].Producto])
            //     arreglo["Precio_Venta"].push([datos[item].Precio_Venta])
            //     arreglo["Cantidad"].push([datos[item].Cantidad])
            // }
            // localStorage.setItem("tablaProductosFamilia", arreglo["Familia"]);
            // localStorage.setItem("tablaProductosProducto", arreglo["Producto"]);
            // localStorage.setItem("tablaProductosPrecio_Venta", arreglo["Precio_Venta"]);
            // localStorage.setItem("tablaProductosCantidad", arreglo["Cantidad"]);
            localStorage.setItem("tablaProductos", datos);
            // setSavedData(true);
            // setTimeout(function () {
            //     window.location.href = "/";} );
            // console.log(JSON.parse(localStorage.getItem("tablaProductos")));  
        };

    } // Cerramos el if, ya tenemos los datos de la tabla en tablaProductos de LocalStorage

    function mostrarHtml(datos) {
        // console.log(JSON.stringify(localStorage.getItem("TablaProductos")));
        // console.log(typeof(datos));
        let respuestas = document.querySelector("#respuesta2");
        // console.log("Respuestas 2 recien ", respuestas)
        for (let item in datos) {

            const row = document.createElement('tr');
            if (datos[item].Precio_Venta === '' || datos[item].Precio_Venta === '$ -') {

            } else {
                if (i >= datosMostrados) { } else {
                  
                    if (((datos[item].Familia).toLowerCase()) === (familia1.toLowerCase()) || familia1.toLocaleLowerCase() === "productos") {
                        i++;
                        // console.log(i);
                        // console.log(datos[item].Familia);
                        row.innerHTML = (`
                        <td>${datos[item].Familia}</td>
                        <td>${datos[item].Producto}</td>
                        <td>${datos[item].Precio_Venta}</td>
                        <td>${datos[item].Cantidad}</td>
                        `)
                        // console.log("respuestas", respuestas);
                        // console.log("row", row);
                        respuestas.appendChild(row);
                    }
                }
            }
            // const respuestas = document.querySelector("#respuestas2");

        }

    }
    return (

        <div className='TablaProductosActualizados'>
            <h2 className='tituloTabla'>{familia1.toUpperCase()}</h2>

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
                        <tbody id='respuesta2' />


                    </table>
                </div>
            </div>
            {/* <script src="sheetsLocal.jsx"></script> */}
        </div>
    )
}


export default sheetsLocal