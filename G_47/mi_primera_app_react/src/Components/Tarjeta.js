import React, { Component } from "react";
//import img1 from "./img1.png";

class Tarjeta extends Component {
    
    constructor(){
        super();
        this.state={
            titulo:''
        }
    }
    editar(){
        alert("Editando...");
    }
    
    render() {
        
        return (

            <div className="col-sm-4">
                {/* //row-cols-1 row-cols-md-3 g-4 */}
                <div className="card mb-4">
                    <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="bg-danger rounded-pill">Prioridad: {this.props.prioridad}</span>
                        <br/>
                        <span className="bg-success rounded-pill">Responsable: {this.props.responsable}</span>
                        <br/>
                        <span className="bg-primary rounded-pill">Tiempo: {this.props.numero} minutos</span>
                        <br/>
                        <button formTarget="#formulario1" className="btn btn-primary border mx-auto me-2" onClick={this.editar}>Editar</button>
                        <button className="btn btn-danger border mx-auto" >Eliminar</button>
                    </div>
                </div>

                <div className="modal fade" id="formulario1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default Tarjeta;