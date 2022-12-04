import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
// import ProductData from "../components/catalog/Catalog";
import "./producto.css";
// import Googlesheet from "../components/apis/googlesheet";
import ProductosSheets from "../components/apis/ProductosSheets";
import Footer from "../components/footer/footer";

const Producto = () => {


    return (
        <div>
            <NavigationBar />
            <ProductosSheets />
            {/* <Googlesheet/> */}
            {/* <ProductData/> */}
            <Footer />
        </div>
    );
}

export default Producto;