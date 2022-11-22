import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import { isUndefined, isNull } from 'util';
import "./prompt.css";


export default class MessajePrompts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.show) this.setState({ show: true }, this.hideMessage());
	}

	hideMessage() {
		setTimeout(() => {
			this.setState({ show: false });
		},
			this.props.duration);
	}

	onExited() {
		if (!isUndefined(this.props.onExited) &&
			!isNull(this.props.onExited))
			this.props.onExited();
	}


	render() {
		return (
			<Container id="empleados-crear-container">
				<Modal id="message-prompt" centered show={this.state.show}
					onExited={() => this.onExited()}>
					<Modal.Body>
						{
							this.props.text
						}
					</Modal.Body>
				</Modal>
			</Container>
		);
	}
}
