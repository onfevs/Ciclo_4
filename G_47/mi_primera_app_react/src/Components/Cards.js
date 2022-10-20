import React, { Component } from "react";

class Tarjeta extends Component {
    render() {
        return (
            <div className="m-0 py-2 col-sm-4">
                <div className="mx-4 card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <button formTarget="formulario1" className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger m-2">Eliminar</button>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Tarjeta;