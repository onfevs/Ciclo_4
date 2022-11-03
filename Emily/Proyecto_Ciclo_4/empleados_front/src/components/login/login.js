import React from 'react'; // IMR
import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { MdPassword } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { GrFacebook, GrInstagram, GrTwitter, GrGithub } from "react-icons/gr";
import './login.css';

export default class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usuario: '',
			pass: ''
		};
	}

	iniciarSesion() {
		alert("ALERTA!")
	}


	render() {
		return (
			<Container id="login-container">
				<Row>
					<Col
						sm="12"
						xs="12"
						md={{ span: 4, offset: 4 }}
						lg={{ span: 4, offset: 4 }}
						xl={{ span: 4, offset: 4 }}>
						<Row>
							<h2>Iniciar Sesion</h2>
						</Row>
						<Row><Form.Label><FcBusinessman /></Form.Label>
							<FloatingLabel
								controlId="floatingInput"
								label="Usuario"
								className="mb-4">
								<Form.Control onChange={(e) => this.setState({ usuario: e.target.value })} required placeholder="Usuario" />
							</FloatingLabel>
							<Form.Label><MdPassword /></Form.Label>
							<FloatingLabel controlId="floatingPassword" label="Contraseña" >
								<Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value })} required placeholder="Password" />
							</FloatingLabel>
							<Button variant="primary"
								onClick={() => {
									this.iniciarSesion();
								}}>
								<HiArrowRightOnRectangle /> Iniciar Sesion
							</Button>
							{/* Redes sociales */}
							<div className="social">
								<a href="https://facebook.com/onfevs" target="blank"><GrFacebook /></a>
								<a href="https://instagram.com/onfevs" target="blank"><GrInstagram /></a>
								<a href="https://twitter.com/onfevs" target="blank"><GrTwitter /></a>
								<a href="https://github.com/onfevs" target="blank"><GrGithub /></a>
							</div>
							<div className="pie">
								&copy; 2022 @OnfeVS
							</div>
						</Row>
					</Col>
				</Row >
			</Container >
		);
	}
} // CCC 


