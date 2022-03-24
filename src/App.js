import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react' 

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       status: 1,
       leyenda: "Iniciar Sesion"
      
    }
    this.accion1 = this.accion1.bind(this)
    this.accion2 = this.accion2.bind(this)
  }

  accion1 ( ){
    console.log('Iniciando Sesion...')
    this.setState({
      status: 0,
      leyenda: "Cerrar Sesion"
    })
  }
  accion2 ( ){
    console.log('Cerrando Sesion...')
    this.setState({
      status: 1, 
      leyenda: "Iniciar Sesion"
    })
  }
  render( ) {

    const {status,leyenda} = this.state
    return (
      <>
      {status === 1 ?  <button onClick={this.accion1}>{leyenda}</button> : <button onClick={this.accion2}>{leyenda}</button>}  
      </>
    )
  }
}

export default App
 