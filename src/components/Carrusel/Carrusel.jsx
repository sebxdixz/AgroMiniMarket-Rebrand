import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css';
import SlideProducto1 from "./01.jpg"
import SlideProducto2 from "./02.jpg"
import SlideProducto3 from "./03.jpg"

function Carrusel() {
  return (
      <div className='Box'>
    <Carousel fade>
      <Carousel.Item>
        <div className="slidesProductos" id='primary'>
          <img
            className="d-block w-100"
            src={SlideProducto1}
            alt="Imagen de producto de AgroMinimarket 1"
          />
        </div>
        <Carousel.Caption>
          <h3 style={{ color: "grey" }}> </h3>
          <p style={{ color: "grey" }}> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidesProductos" id='primary'>
          <img
            className="d-block w-100"
            src={SlideProducto2}
            alt="Imagen de producto de AgroMinimarket 2"
          />
        </div>

        <Carousel.Caption>
          <h3 style={{ color: "grey" }}> </h3>
          <p style={{ color: "grey" }}> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidesProductos" id='primary'>
          <img
            className="d-block w-100"
            src={SlideProducto3}
            alt="Imagen de producto de AgroMinimarket 3"
          />
        </div>

        <Carousel.Caption>
          <h3 style={{ color: "grey" }}> </h3>
          <p style={{ color: "grey" }}> </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrusel;