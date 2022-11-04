import React from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import logo3 from "../logos/Logo3AM.png"
const Logos =require.context('../logos/');

function NavigationBar() {
  return (
  <>
      <NavContainer>
        <h2>
          <a href="/"><img
            className="iconoNavbar"
            src={logo3} alt="Logo Inicio" /></a>
          {/* Agro<span>Minimarket</span> (Inicio Tambien) */}
        </h2>
        <div>
          <a href="/"><img src={logo3} alt="Logo de inicio de AgroMinimarket" /></a>
          <a href="/">Buscar</a>
          <a href="/">Conocenos</a>
        </div>
        <div className="burguer"><BurgerButton /></div>
      </NavContainer>
  </>
    
  );
}

export default NavigationBar;

const NavContainer = styled.nav`
h2{
  color: white;
  font-weight: 400;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
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
  transition: all .5s ease;
  a{
    color: white;
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
  width: 100%;
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
z-index: -1;
transition: all .6s ease ;

&.active{
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`