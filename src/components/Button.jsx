import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         texto: "Iniciar Sesion", 

      }
      this.accion1 = this.accion1.bind(this);
      this.accion2 = this.accion2.bind(this);
    }

    accion1(){
        console.log('Iniciar Sesion')
    }
    accion2(){
        console.log('Cerrar Sesion')
    }
  render() {

    return (
        <>
      <button onClick={this.accion1}>{this.props.texto}</button> 
        </>
    )
  }
}

export default Button