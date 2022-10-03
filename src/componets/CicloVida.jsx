import React, { Component } from "react";

class Reloj extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora} </h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se incializa, aun NO esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiando");
    console.log(prevProps);
    console.log(prevState);
  }



  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(4, "El componente se dibuja en el DOM");
    return (
      <>
        <h2>Ciclo de vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
