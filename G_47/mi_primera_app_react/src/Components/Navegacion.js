import React, { Component } from "react";

class Navegacion extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand mb-0 h1">{this.props.titulo}</a>
                </div>
            </nav>

        );
    }
}

export default Navegacion;