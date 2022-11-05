import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import "./css/colors.module.css";
import Carrusel from "./components/carrusel/Carrusel";  
import ProductData from './components/catalog/Catalog';

function App() {
  return (
    
    <div className="App">

        
          <div>
            <NavigationBar/>
          </div>
        
        
        
          <div>
            <h2>
              <Carrusel/>
            </h2>
            <p3> 
              <ProductData/>
            </p3>
            
          </div>
        
      
    </div>
  );
}

export default App;
