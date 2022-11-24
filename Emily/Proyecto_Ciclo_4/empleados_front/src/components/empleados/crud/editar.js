import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessajePrompts from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class EmpleadosEditar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			idEmpleado: this.props.getIdEmpleado(),
			redirect: false, //Para no redirigir a otra pagina
			message: {
				text: '',
				show: false,
			},
			confirmation: {
				title: 'Modificar Empleado',
				text: 'Desea modificar el empleado?',
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
		this.onCancel = this.onCancel.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
	}

	componentDidMount() {
		this.getEmpleado();
	}

	getEmpleado() {
		this.setState({ loading: true });
		request
			.get(`/empleados/${this.state.idEmpleado}`)
			.then((response) => {
				this.setState({
					empleado: response.data,
					loading: false,
				});
			})
			.catch((err) => {
				console.error(err);
				this.setState({ loading: false });
			});
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
			.put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
			.then((response) => {
				if (response.data.exito) {
					this.props.changeTab('buscar');
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
		if (this.state.redirect) this.props.changeTab('buscar');
	}

	onCancel() {
		this.setState({
			confirmation: { ...this.state.confirmation, show: false, },
		})
	}

	onConfirm() {
		this.setState({
			confirmation: { ...this.state.confirmation, show: false, },
		}, this.guardarEmpleados());
	}

	render() {
		return (
			<Container id="empleados-editar-container">
				<MessajePrompts
					text={this.state.message.text}
					show={this.state.message.show}
					duration={2500}
					onExited={this.onExitedMessage} />
				<ConfirmationPrompts
					show={this.state.confirmation.show}
					title={this.state.confirmation.title}
					text={this.state.confirmation.text}
					onCancel={this.onCancel}
					onConfirm={this.onConfirm} />
				<Loading show={this.state.loading} />
				<Row>
					<h1>Editar Empleados</h1>
				</Row>
				<Row>
					<Form>
						{/* Nombre */}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.nombre}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("nombre", e.target.value)} />
							<label htmlFor="floatingInputCustom">Nombre</label>
						</Form.Floating>
						{/* Primer Apellido */}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.apellido_p}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("apellido_p", e.target.value)} />
							<label htmlFor="floatingInputCustom">Primer Apellido</label>
						</Form.Floating>
						{/* Segundo Apellido */}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.apellido_m}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("apellido_m", e.target.value)} />
							<label htmlFor="floatingInputCustom">Segundo Apellido</label>
						</Form.Floating>
						{/*  Teléfono*/}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.telefono}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("telefono", e.target.value)} />
							<label htmlFor="floatingInputCustom">Teléfono</label>
						</Form.Floating>
						{/* Correo electrónico */}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.mail}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("mail", e.target.value)} />
							<label htmlFor="floatingInputCustom">Correo electrónico</label>
						</Form.Floating>
						{/* Dirección */}
						<Form.Floating className="mb-3" >
							<Form.Control
								value={this.state.empleado.direccion}
								id="formBasic"
								type="name"
								placeholder="Username"
								onChange={(e) => this.setValue("direccion", e.target.value)} />
							<label htmlFor="floatingInputCustom">Dirección </label>
						</Form.Floating>
						{/* Boton */}
						<Button
							variant="primary"
							onClick={() =>
								this.setState({
									confirmation: { ...this.state.confirmation, show: true },
								})
							}>Editar Empleado
						</Button>
					</Form>
				</Row>
			</Container>
		);
	}
}