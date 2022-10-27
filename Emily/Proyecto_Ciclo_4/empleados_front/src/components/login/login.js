import React from 'react'; // IMR
import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { MdPassword } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";



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
							<h2 style={{ marginBottom: 20, color: 'deepskyblue' }}>Iniciar Sesion</h2>
						</Row>
						<Row><Form.Label style={{ alignItems: "center", display: "flex", gap: 10 }}><FcBusinessman /></Form.Label>
							<FloatingLabel
								controlId="floatingInput"
								label="Usuario"
								className="mb-4">
								<Form.Control onChange={(e) => this.setState({ usuario: e.target.value })} required placeholder="Usuario" />
							</FloatingLabel>
							<Form.Label style={{ alignItems: "center", display: "flex", gap: 10 }}><MdPassword /></Form.Label>
							<FloatingLabel controlId="floatingPassword" label="Contraseña" >
								<Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value })} required placeholder="Password" />
							</FloatingLabel>
							<Button variant="primary" style={{ marginTop: 20, width: '100%', outline: '2px solid dodgerblue', outlineOffset: '2px', }}
								onClick={() => {
									this.iniciarSesion();
								}}>
								<HiArrowRightOnRectangle /> Iniciar Sesion
							</Button>
						</Row>
					</Col>
				</Row >
			</Container >
		);
	}
} // CCC 


