import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="nofollow noopener noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
          <h3>Frameworks Frotend JavaScript</h3>
          <ul>
            {data.frameworks.map((el) => (
              <ElementoLista key={el.id} el={el} />
            ))}
          </ul>
        </ol>
      </div>
    );
  }
}
