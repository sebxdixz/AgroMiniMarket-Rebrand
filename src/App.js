import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import "./css/colors.module.css";
import Carrusel from "./components/carrusel/Carrusel";  
import ProductData from './components/catalog/Catalog';
import Ubication from './components/ubication/Ubication';

function App() {
  return (
    
      <div className="App">
        <div class="linear-gradient">

        
          <div>
            <NavigationBar/>
          </div>
        
        
        
          <div className='CarruselApp'>
            <h2>
              <Carrusel/>
            </h2>
            <div><Ubication/></div>
            <div className='ProductosPaginaPrincipal'> 
              <h2 className='catalogoTitle'>Productos Disponibles en Tienda</h2>
              <ProductData/>
<<<<<<< Updated upstream
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2781625637735!2d-70.56062634915877!3d-33.389906480696986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfa50203f087%3A0xabb8c400a45a5875!2sAgrominimarket!5e0!3m2!1ses-419!2scl!4v1667752299402!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
             */}
=======
            </p3>
            
>>>>>>> Stashed changes
          </div>
          <footer> 
            <div className=''>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2781625637735!2d-70.56062634915877!3d-33.389906480696986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfa50203f087%3A0xabb8c400a45a5875!2sAgrominimarket!5e0!3m2!1ses-419!2scl!4v1667752299402!5m2!1ses-419!2scl" width="600" height="450" style={{ float:`left` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
            </div>             
          </footer>
        
        </div>
    </div>
  );
}

export default App;
