import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
// import ProductData from "../components/catalog/Catalog";
import "./producto.css";
// import Googlesheet from "../components/apis/googlesheet";
import ProductosSheets from "../components/apis/ProductosSheets";
import Footer from "../components/footer/footer";
import SheetsLocal from "../components/myLocalStorage/SheetsLocal";

const Producto = () => {


    return (
        <div>
            <NavigationBar />
            {/* <ProductosSheets /> */}
            <SheetsLocal />
            {/* <Googlesheet/> */}
            {/* <ProductData/> */}
            <Footer />
        </div>
    );
}

export default Producto;