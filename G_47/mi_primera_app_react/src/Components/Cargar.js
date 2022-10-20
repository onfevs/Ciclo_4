import React, { Component } from 'react';
import Datos from './Datos.json';

class Cargar extends Component {
    constructor() {
        super();
        this.state = { Datos }
        console.log(this.state.Datos.length);
    }
    render() {
        let mostrar = this.state.Datos.map((dato) => {
            return (
                <Tarjeta titulo={dato.titulo} description={dato.descripcion}'/>);
        })
        return (
            <div className="row" >
                {mostrar}
            </div>);
    }
}

export default Cargar;