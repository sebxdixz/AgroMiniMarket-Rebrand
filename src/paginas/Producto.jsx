import React, { Suspense, lazy } from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
// import ProductData from "../components/catalog/Catalog";
import "./producto.css";
import ProductosSheets from "../components/apis/ProductosSheets"
// import Googlesheet from "../components/apis/googlesheet"; 
import Footer from "../components/footer/footer";
import SheetsLocal from "../components/myLocalStorage/SheetsLocal";

const Producto = () => {


    return (
        <div>
            <NavigationBar />
            {/* <ProductosSheets /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <SheetsLocal />
            </Suspense>
            {/* <ProductosSheets /> */}
            {/* <Googlesheet/> */}
            {/* <ProductData/> */}
            <Footer />
        </div>
    );
}

export default Producto;