import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./componets/Componente";
import Propiedades from "./componets/Propiedades";
import Estado from "./componets/Estado";
import RendizadoCondicional from "./componets/RendizadoCondicional";
import RenderizadoElementos from "./componets/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./componets/Eventos";

import ComunicacionComponente from "./componets/ComunicacionComponente";

import CicloVida from "./componets/CicloVida";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edita <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componenete desde una props" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto "
            numero={19}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "inaki", correo: "inakiunzaga88@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>esto es un elemento react</i>}
            componenteReact={
              <Componente msg="soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RendizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponente />
          <hr />
          <CicloVida />
        </section>
      </header>
    </div>
  );
}

export default App;
