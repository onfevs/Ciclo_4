import React from 'react'; // IMR
import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';

export default class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usuario: '',
			pass: ''
		};
	}

	iniciarSesion() {
		alert('Please enter');
	}


	render() {
		return (
			<Container id="login-container" style={{ marginTop: 300 }}>
				<Row>
					<Col>
						<Row>
							<h2 style={{ marginBottom: 20 }}>Iniciar Sesion</h2>
						</Row>
						<Row>
							<FloatingLabel
								controlId="floatingInput"
								label="Usuario"
								className="mb-4">
								<Form.Control onChange={(e) => this.setState({ usuario: e.target.value })} required placeholder="Usuario" />
							</FloatingLabel>
							{/* <Form.Label >Password</Form.Label> */}
							<FloatingLabel controlId="floatingPassword" label="Contraseña" >
								<Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value })} required placeholder="Password" />
							</FloatingLabel>
							<Button variant="primary" style={{ marginTop: 20, width: '100%' }}
								onClick={() => {
									this.iniciarSesion();
								}}>
								Iniciar Sesion
							</Button>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
} // CCC 


