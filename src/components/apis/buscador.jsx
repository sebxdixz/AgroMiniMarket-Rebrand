// import React from 'react'
// import {useEffect, useState} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


// function buscador (){
//   //variables:
//   const [usuarios, setUsuarios]= useState([]);
//   const [tablaUsuarios, setTablaUsuarios]= useState([]);
//   const [busqueda, setBusqueda]= useState("");
//   const datosMostrados = 100
//   const url ='https://script.google.com/macros/s/AKfycbzcUJ-N1OOKWwO9VUtaziczsouxdy9DYfVCQxxUMHq1qVhSRcOfxwtCyxnMBfzYU8Zzkw/exec';
//   let i =0;
//   //evento:
//   document.addEventListener("DOMContentLoaded", llamarApi());
//   //funciones:
//   const peticionGet=async()=>{
//     const respuesta = await fetch( url )
//     const data =  await respuesta.json()
//     const dato=JSON.stringify(data["data"])
//     setUsuarios(JSON.parse(dato));
//     setTablaUsuarios(JSON.parse(dato));
//     // mostrarHtml(JSON.parse(dato))
//   }
  
//   const handleChange=e=>{
//     setBusqueda(e.target.value);
//     filtrar(e.target.value);
//   }
//   const filtrar=(terminoBusqueda)=>{
//     var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
//       if(tablaUsuarios.elemento.Producto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//       || tablaUsuarios.elemento.Familia.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//       ){
//         return tablaUsuarios.elemento;
//       }
//     });
//     setUsuarios(resultadosBusqueda);
//   }
  
//   useEffect(()=>{
//   peticionGet();
//   },[])
  
//   function mostrarHtml(datos){
//     const respuestas = document.querySelector("#respuestas")
    
    
//     for(let item in datos){
//       i++;
//       if (i>=datosMostrados+2){}else{
//       const row = document.createElement('tr');
//       if(datos[item].Precio_Venta===''||datos[item].Precio_Venta==='$ -'){

//       }else{
//       row.innerHTML = (`
//         <td>${datos[item].Familia}</td>
//         <td>${datos[item].Producto}</td>
//         <td>${datos[item].Precio_Venta}</td>
//         <td>${datos[item].Cantidad}</td>
//         `)
//       }
//       respuestas.appendChild(row);
      
//       }
//     }
//   }
//     // const peticionGet=async()=>{
//       await axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response=>{
//         setUsuarios(JSON.parse(dato))
//         setTablaUsuarios(JSON.parse(dato));
//       }).catch(error=>{
//         console.log(error);
//       })
//     }
    
//     const handleChange=e=>{
//       setBusqueda(e.target.value);
//       filtrar(e.target.value);
//     }
    
//     const filtrar=(terminoBusqueda)=>{
//       var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
//         if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//         || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//         ){
//           return elemento;
//         }
//       });
//       setUsuarios(resultadosBusqueda);
//     }
    
//     useEffect(()=>{
//     peticionGet();
//     },[])
    
//       return (
//         <div className="App">
//           <div className="containerInput">
//             <input
//               className="form-control inputBuscar"
//               value={busqueda}
//               placeholder="Búsqueda por Nombre o Empresa"
//               onChange={handleChange}
//             />
//             <button className="btn btn-success">
//               <FontAwesomeIcon icon={faSearch}/>
//             </button>
//           </div>
    
//          <div className="table-responsive">
//            <table className="table table-sm table-bordered">
//              <thead>
//                <tr>
//                  <th>ID</th>
//                  <th>Nombre</th>
//                  <th>Teléfono</th>
//                  <th>Nombre de Usuario</th>
//                  <th>Correo</th>
//                  <th>Sitio Web</th>
//                  <th>Ciudad</th>
//                  <th>Empresa</th>
//                </tr>
//              </thead>
    
//              <tbody>
//                {usuarios && 
//                usuarios.map((usuario)=>(
//                  <tr key={usuario.id}>
//                    <td>{usuario.id}</td>
//                    <td>{usuario.name}</td>
//                    <td>{usuario.phone}</td>
//                    <td>{usuario.username}</td>
//                    <td>{usuario.email}</td>
//                    <td>{usuario.website}</td>
//                    <td>{usuario.address.city}</td>
//                    <td>{usuario.company.name}</td>
//                  </tr>
//                ))}
//              </tbody>
    
//            </table>
    
//          </div>
//         </div>
//       );
//     }
    
// export default buscador