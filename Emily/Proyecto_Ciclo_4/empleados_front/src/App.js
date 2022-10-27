import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// Importar desde boostrap
import { Container } from 'react-bootstrap'; // Se importar los componentes en una sola linea con el {} separandolos de las comas,
import Login from './components/login/login'; // Siempre en mayuscula la primera letra


function App() {
	return (
		<div className="App">
			<Container>
				<Login />
			</Container>
		</div >
	);
}

export default App;
