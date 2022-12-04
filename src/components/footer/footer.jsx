import React from "react";
import "./footer.css"
import logo from "./logo_ig.png" 

function Footer() {
    return (

        <section className="footer">
        <hr className="footer-seperator" />
        <section className="footer-social-media">
          <a href="https://www.instagram.com/agrominimarket/"><img src={logo} height="30" width="30" /></a>
        </section>
        <section className="footer-info">
          <section className="footer-info-left">
            <section className="footer-info__name">
                <aaa>Patricio Diaz</aaa> 
                <br />
                <br />
                Ingeniero oriundo del sector 
                        <br />
                poniente de santiago, educado
                <br />
                en Arica, actualmente dueño de 
                        <br />
                AgrominiMarket
            </section>       
          </section>
          <section className="footer-info-center">
            <section className="footer-info__email">
              ventas@agrominimarket.cl
            </section>
          </section>
          <section className="footer-info-right">
            <section className="footer-info__number">
              +56 9 7201 2323
            </section>
            <section className="footer-info__contact">
              Para pedidos grandes contactar
              <br />
               via Email o mensaje en WhatsApp
            </section>
          </section>
        </section>
        <hr className="footer-seperator" />
      </section>

    )
}
export default Footer;
