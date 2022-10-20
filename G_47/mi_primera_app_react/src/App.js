import logo from './logo.svg';
import './App.css';
// Llamando componentes
import Navegacion from './Components/Navegacion';
import Tarjeta from './Components/Cards';
import Cargar from './Components/Cargar';

function App() {
  return (
    <div className="App">
      <Cargar />
      <Navegacion titulo='Barra 1' />
      <div className="row">
        <Tarjeta titulo='Tarjeta 1' description='Descripcion tarjeta 1' />
        <Tarjeta titulo='Tarjeta 2' description='Descripcion tarjeta 2' />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> guardar y recargar.
        </p>
      </header>
    </div>
  );
}

export default App;
