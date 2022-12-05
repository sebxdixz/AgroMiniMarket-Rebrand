import React, { Suspense, lazy } from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
// import ProductData from "../components/catalog/Catalog";
import "./producto.css";
import ProductosSheets from "../components/apis/ProductosSheets"
// import Googlesheet from "../components/apis/googlesheet"; 
import Footer from "../components/footer/footer";

const Producto = () => {


    return (
        <div>
            <NavigationBar />
            <Suspense fallback={<div>Loading...</div>}>
            <ProductosSheets />
            </Suspense>
            {/* <Googlesheet/> */}
            {/* <ProductData/> */}
            <Footer />
        </div>
    );
}

export default Producto;