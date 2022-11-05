import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';
import SlideProducto1 from "./01.png"
import SlideProducto2 from "./02.png"
import SlideProducto3 from "./03.png"

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="slidesProductos">
          <img
            className="d-block w-100"
            src={SlideProducto1}
            alt="Imagen de producto de AgroMinimarket 1"
          />
        </div>
        <Carousel.Caption>
          <h3 style={{ color: "grey" }}>1</h3>
          <p style={{ color: "grey" }}>Jardin de las delicias</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidesProductos">
          <img
            className="d-block w-100"
            src={SlideProducto2}
            alt="Imagen de producto de AgroMinimarket 2"
          />
        </div>

        <Carousel.Caption>
          <h3 style={{ color: "grey" }}>2</h3>
          <p style={{ color: "grey" }}>Foto japonesa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidesProductos">
          <img
            className="d-block w-100"
            src={SlideProducto3}
            alt="Imagen de producto de AgroMinimarket 3"
          />
        </div>

        <Carousel.Caption>
          <h3 style={{ color: "grey" }}>3</h3>
          <p style={{ color: "grey" }}>
            y otra. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;