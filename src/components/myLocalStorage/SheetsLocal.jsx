import React from "react";
// import "./myLocalStorage.css";
// import './apis.css'


const sheetsLocal = () => {
    // const [inputText, setInputText] = useState(""); //borrar
    // const [savedData, setSavedData] = useState(false); //

    const datosMostrados = 100;
    let i = 0;
    const familia1 = localStorage.getItem("opciones") === null ? "Productos" : localStorage.getItem("opciones"); //Posibilidades: (Productos, Frutos, Bebestibles, Insumos, Verduras, Abarrotes, Aliños)

    //variables:
    
    const url = 'https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';

    //evento:
    // if (localStorage.getItem("tablaProductos") === null) {
        document.addEventListener("DOMContentLoaded", llamarApi());
    // } else {
    //     document.addEventListener("DOMContentLoaded", onlyShow());

    // }
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
        mostrarHtml(); //
    }


    const saveData = (datos) => {
        if (localStorage.getItem("tablaProductos") === null) {

            localStorage.setItem("tablaProductos", datos);
            console.log("Datos cargados desde GoogleScripts")
        }else{
            console.log("Datos cargados desde localStorage")
        };

    } // Cerramos el if, ya tenemos los datos de la tabla en tablaProductos de LocalStorage

    function mostrarHtml() {
        const datos = JSON.parse(localStorage.getItem("tablaProductos"));
        for (let item in datos) {

            const row = document.createElement('tr');
            if (datos[item].Precio_Venta === '' || datos[item].Precio_Venta === '$ -') {

            } else {
                if (i >= datosMostrados) { } else {

                    if (((datos[item].Familia).toLowerCase()) === (familia1.toLowerCase()) || familia1.toLocaleLowerCase() === "productos") {
                        i++;
                        row.innerHTML = (`
                        <td>${datos[item].Familia}</td>
                        <td>${datos[item].Producto}</td>
                        <td>${datos[item].Precio_Venta}</td>
                        <td>${datos[item].Cantidad}</td>
                        `)
                        document.querySelector("#respuestas").appendChild(row);
                        // respuestas.appendChild(row);

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
                        <tbody id='respuestas' />


                    </table>
                </div>
            </div>
            {/* <script src="sheetsLocal.jsx"></script> */}
        </div>
    )
}


export default sheetsLocal