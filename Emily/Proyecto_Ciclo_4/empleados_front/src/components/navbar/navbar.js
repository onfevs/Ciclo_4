import React from 'react';
import { Container, Navbar, Nav, DropdownButton, Dropdown, Row } from 'react-bootstrap';
import './navbar.css';
import { FcSportsMode } from "react-icons/fc";



export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {}
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark" expand="xl">
                <Container>
                    <Navbar.Brand href="#home">Logo Aqui</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Catalogo</Nav.Link>
                            <Nav.Link href="#features">Precios</Nav.Link>
                            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header>
                                <Row>
                                    <FcSportsMode />
                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

