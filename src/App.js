import './App.css';
import { Button } from 'react-bootstrap';
import {PrimerComponente} from './components/PrimerComponente';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimerComponente/>
      </header>
      <body>
        <>
        <NavigationBar/>
        </>
      </body>
    </div>
  );
}

export default App;
