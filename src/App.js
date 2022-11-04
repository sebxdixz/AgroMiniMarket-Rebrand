import './App.css';
// import { Button } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Carrusel from "./components/carrusel/Carrusel";  

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
          </div>
        
      
    </div>
  );
}

export default App;
