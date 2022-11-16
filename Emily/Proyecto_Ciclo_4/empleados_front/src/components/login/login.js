import React from 'react'; // IMR
import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { MdPassword } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { GrFacebook, GrInstagram, GrTwitter, GrGithub } from "react-icons/gr";
import './login.css';
import axios from "axios"; // Para conectar el back con el front
import app from "../../app.json";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper";
import Loading from "../loading/loading"; // La clase es en Letra mayuscula

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			usuario: '',
			pass: ''
		};
	}

	iniciarSesion() {
		this.setState({ loading: true });
		axios.post(`${APIHOST}/usuarios/login`, {
			usuario: this.state.usuario,
			pass: this.state.pass,
		})
			.then((response) => {
				if (isNull(response.data.token)) {
					alert("Usuario y/o contrasena invalidos")
				}
				else {
					cookies.set('_s', response.data.token,
						{
							path: '/',
							expires: calcularExpirarSesion(),
						});
					this.props.history.push(window.open('/empleados'));
				}
				this.setState({ loading: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ loading: false });
			});
	}


	render() {
		return (
			<Container id="login-container">
				<Loading show={this.state.loading} />
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
								&copy; OnfeVS 2022
							</div>
						</Row>
					</Col>
				</Row >
			</Container >
		);
	}
} // CCC 


