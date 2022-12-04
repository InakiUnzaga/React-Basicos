import React, { useState } from "react";

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulado se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre : </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <p>Elige tu lenguaje de programación favortita</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="react">
          <option value="">----</option>
          <option value="js">JS</option>
          <option value="go">GO</option>
          <option value="rust">RUST</option>
          <option value="react">REACT</option>
        </select>
        <br />
        <label htmlFor="terminos">Aceptos términos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

// version facil
// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState("false");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulado se ha enviado");
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre : </label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu Sabor JS Favorito</p>
//         <input
//           type="radio"
//           name="sabor"
//           id="vanilla"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="react"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="angular"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <p>Elige tu lenguaje de programación favortita</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue="react"
//         >
//           <option value="">----</option>
//           <option value="js">JS</option>
//           <option value="go">GO</option>
//           <option value="rust">RUST</option>
//           <option value="react">REACT</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Aceptos términos y condiciones</label>
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }
