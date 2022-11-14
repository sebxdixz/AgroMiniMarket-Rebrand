import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import logo3 from "../../logos/Logo3AM.png";
import { Link } from "react-router-dom";
import './navigationBar.css'
import '../../css/colors.module.css'



// const Logos =require.context('../../logos/');

function NavigationBar() {
  
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  }
    return (
      <>
            <NavContainer style={{ backgroundColor: '#f9683a', borderRadius: 0, boxShadow: '0px 0px 10px #bf360c' }}>
        <h2 className="inicio">
          <a className="inicio" href="/">
            <div className="inicio">
              <img to="/" className="iconoNavbar" src={logo3} alt="Logo de inicio de AgroMinimarket" />
            </div>
          </a>
          {/* Agro<span>Minimarket</span> (Inicio Tambien) */}
        </h2>
        <div className={`links ${clicked ? 'active' : ''}`}>  
          
          {/* <a onClick={handleClick} href="#h">Buscar(Buscador)</a>
          <a onClick={handleClick} href="#h"><DropdownProductos/></a>
          <a onClick={handleClick} href="#h">Conocenos(Redireccion)</a> */}
          <div className="navDer2">
            <a className="navBusc" href="/">Inicio</a>
          </div>
          <div className="separador"/>
          <div className="navDer2" title="product">
            <a className="navProd" href="/Productos">Productos</a> {/*<DropdownProductos/>*/}
          </div>
          <div className="separador"/>

          <div className="navDer2">
            
            <Link to="/Conocenos" className="navConocenos" href="/Conocenos">Conócenos</Link>
          
          </div>
        </div>
        <div className='burguer'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
      <div className={`${clicked ? 'active' : ''}`}/>
  </>
    
    );
  }
  
  export default NavigationBar;
  
  const NavContainer = styled.nav`

  padding: .4rem;
  background-color: #0E84CF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  border-radius: 3%;

a{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  display:inline;
  font-family: 'Helvetica';
  font-size: 1.2rem;
}

  
}
.links{
  position: absolute;
  top: -700px;
  left: -1000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .4s ease;
  display:inline;
  


  a{
    color: black;
    font-size: 2rem;
    display: inline;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: black;
      display: inline;
    }
    display: inline;
  }
}
.links.active{
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 17%;
  left: 73%;
  right: 0;
  text-align: left;
  justify-content: space-between;
  .navDer2{
    padding:0.1%;
  }
  a{
    font-size: 1rem;
    margin-top: 1rem;
    color: white;
  }
}
.burguer{
  @media(min-width: 768px){
    display: none;
  }
}
`

const BgDiv = styled.div`
background-color: #222;
position: absolute;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
margin:auto;
z-index: -1;
transition: all .4s ease ;

&.active{
  border-radius: 0 0 25% 25%;
  top: 0;
  left: 65%;
  bottom: 400%;
  width: 100%;
  height: 100%;
}
`
