import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import ProductData from "../components/catalog/Catalog";
import "./producto.css";

const Producto = () => {
    return (
        <div>
            <NavigationBar />
            <box>Productos Disponibles</box>
            <ProductData/>
        </div>
    );
} 

export default Producto;