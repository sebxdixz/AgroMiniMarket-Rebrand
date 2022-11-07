import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import ProductData from "../components/catalog/Catalog";

const Producto = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Productos</h1>
            <ProductData/>
        </div>
    );
} 

export default Producto;