import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessajePrompts from "../../prompts/message";

export default class EmpleadosCrear extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false, //Para no redirigir a otra pagina
			message: {
				text: '',
				show: false,
			},
			loading: false,
			empleado: {
				nombre: "",
				apellido_p: "",
				apellido_m: "",
				telefono: "",
				mail: "",
				direccion: "",
			},
		};
		// Mensaje
		this.onExitedMessage = this.onExitedMessage.bind(this);
	}
	setValue(inicioemp, value) {
		this.setState({
			empleado: {
				...this.state.empleado,
				[inicioemp]: value,
			},
		});
	}
	// Funcion de guardar datos en MongoDB
	guardarEmpleados() {
		this.setState({ loading: true });
		request
			.post("/empleados", this.state.empleado)
			.then((response) => {
				if (response.data.exito) {
					this.setState({
						rediret: response.data.exito,
						message: {
							text: response.data.msg,
							show: true,
						},
					});
				}
				this.setState({ loading: false });
			})
			.catch((err) => {
				console.error(err);
				this.setState({ loading: true });
			});
	}

	onExitedMessage() {
		if (this.state.rediret) this.props.changeTab('buscar');
	}


	render() {
		return (
			<Container id="empleados-crear-container">
				<MessajePrompts
					text={this.state.message.text}
					show={this.state.message.show}
					duration={2500}
					onExited={this.onExitedMessage}
				/>

				<Loading show={this.state.loading} />
				<Row>
					<h1>Crear Empleados</h1>
				</Row>
				<Row>
					<Form>
						{/* Nombre */}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("nombre", e.target.value)} />
							<label htmlFor="floatingInputCustom">Nombre</label>
						</Form.Floating>
						{/* Primer Apellido */}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("apellido_p", e.target.value)} />
							<label htmlFor="floatingInputCustom">Primer Apellido</label>
						</Form.Floating>
						{/* Segundo Apellido */}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("apellido_m", e.target.value)} />
							<label htmlFor="floatingInputCustom">Segundo Apellido</label>
						</Form.Floating>
						{/*  Teléfono*/}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("telefono", e.target.value)} />
							<label htmlFor="floatingInputCustom">Teléfono</label>
						</Form.Floating>
						{/* Correo electrónico */}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("mail", e.target.value)} />
							<label htmlFor="floatingInputCustom">Correo electrónico</label>
						</Form.Floating>
						{/* Dirección */}
						<Form.Floating className="mb-3" >
							<Form.Control
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("direccion", e.target.value)} />
							<label htmlFor="floatingInputCustom">Dirección </label>
						</Form.Floating>
						<Button variant="primary" onClick={() => console.log(this.guardarEmpleados())}>
							Guardar empleado
						</Button>
					</Form>
				</Row>
			</Container>
		);
	}
}