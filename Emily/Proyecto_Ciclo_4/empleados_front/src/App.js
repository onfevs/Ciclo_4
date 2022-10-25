import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// Importar desde boostrap
import { Button, Form, Container, FloatingLabel } from 'react-bootstrap'; // Se importar los componentes en una sola linea con el {} separandolos de las comas,


function App() {
	return (
		<div className="App">
			<Container>
				{/* <Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form> */}
				<Form.Label>Email address</Form.Label>
				<FloatingLabel
					controlId="floatingInput"
					label="Email address"
					className="mb-3">
					<Form.Control type="email" placeholder="name@example.com" />
				</FloatingLabel>
				<Form.Label>Password</Form.Label>
				<FloatingLabel controlId="floatingPassword" label="Password">
					<Form.Control type="password" placeholder="Password" />
				</FloatingLabel>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Container>
		</div >
	);
}

export default App;
