import React, { useState } from "react";
import ProductData from '../catalog/Catalog';


// Si te sale error te falta correr esto en la terminal: npm i bootstrap reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';


const DropdownProductos = () => {
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown = () => {
        setDropdown(!dropdown);
    }

    return (

        <div className="DropdownProductos">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                <DropdownToggle caret>Productos</DropdownToggle>
                <DropdownMenu className="divProductosDropdown">

                    {/* <ProductData className="catalogoDropdown"/> */}

                    <ProductData />
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default DropdownProductos