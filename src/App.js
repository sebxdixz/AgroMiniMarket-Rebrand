import './App.css';
// import { Button } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Carrusel from "./components/Carrusel/Carrusel";  

function App() {
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <PrimerComponente/>
      </header> */}
      <body>
        <>
        <NavigationBar/>
        <h2>   

<Carrusel/>
        </h2>
        </>

      </body>
    </div>
  );
}

export default App;
