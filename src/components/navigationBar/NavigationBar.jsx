import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import logo3 from "../../logos/Logo3AM.png";
import './navigationBar.css'

// const Logos =require.context('../../logos/');

function NavigationBar() {
  
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  }
    return (
      <>
      <NavContainer>
        <h2>
          <a href="/">
            <div className="inicio">
              <img className="iconoNavbar" src={logo3} alt="Logo de inicio de AgroMinimarket" />
            </div>
          </a>
          {/* Agro<span>Minimarket</span> (Inicio Tambien) */}
        </h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          
          <a onClick={handleClick} href="#h">Buscar(Buscador)</a>
          <a onClick={handleClick} href="#h">Productos(Dropdown)</a>
          <a onClick={handleClick} href="#h">Conocenos(Redireccion)</a>
        </div>
        <div className='burguer'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
  </>
    
    );
  }
  
  export default NavigationBar;
  
  const NavContainer = styled.nav`

padding: .4rem;
background-color: #B5B2B2;
display: flex;
align-items: center;
justify-content: space-between;
min-width: 100%;
a{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}
.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .3s ease;
  a{
    color: black;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
    display: block;
  }
}
.links.active{
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: black;
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
transition: all .6s ease ;

&.active{
  border-radius: 0 0 20% 20%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`
