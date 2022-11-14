import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import ProductData from "../components/catalog/Catalog";
import "./producto.css";
import Googlesheet from "../components/apis/googlesheet";

const Producto = () => {
    return (
        <div>
            <NavigationBar />
            <div>Productos Disponibles</div>
            <Googlesheet/>
            {/* <ProductData/> */}
        </div>
    );
} 

export default Producto;