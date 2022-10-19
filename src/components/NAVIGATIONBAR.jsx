import React from 'react'
import styled from 'styled-components'

function NavigationBar() {
  return (
    <>
      <Navbar>
        <h2>Agro<span>Minimarket</span></h2>
        <div>
          <a href="/">Logo</a>
          <a href="/">Buscar</a>
          <a href="/">Conocenos</a>
        </div>
      </Navbar>
    </>
  )
}

export default NavigationBar

const Navbar = styled.nav`
  h2{
    font-weight: 400;
    color: white;
    span{
      font-weight: bold;
    }
  padding : .4rem ;
  backround-color: black;
  display: flex ;
  align-items: center;
  justify-content: space-between;
  }
`;