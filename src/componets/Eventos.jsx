import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow Functions
  sumar = (e) => {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }

// const Boton = (props) => (
//   <button onClick={props.myOnClick}>Botón hecho componente</button>
// );

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleCLick = (e) => {
    console.log(e);
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <h2>Más sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleCLick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleCLick(e, "Hola pasando parámetro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleCLick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
