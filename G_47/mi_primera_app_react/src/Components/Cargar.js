import React, { Component } from "react";
import Datos from './Datos.json'
import Tarjeta from './Tarjeta';
class Cargar extends Component {
    constructor() {
        super();
        this.state = {Datos}
        console.log(this.state.Datos.length);
    }

    render() {
        let mostrar=this.state.Datos.map((dato)=>{
            return(
                <Tarjeta titulo={dato.titulo} descripcion={dato.descripcion} numero={dato.numero} imagen={dato.imagen} prioridad={dato.Prioridad} responsable={dato.responsable}/>
                
                
            );
        })
        return (
            <div className="row">
                {mostrar}
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.Datos.length}
                </span>
            </div>
        );
    }
}

export default Cargar;