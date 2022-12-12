import React, { useRef } from "react";

export default function Referencias() {
  // let refMenu = createRef(),
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    // const $menu  = document.getElementById("menu");
    // if(e.target.textContent === "menu"){
    //     e.target.textContent = "Cerrar"
    //     $menu.style.display = "block"
    // }else{
    //     e.target.textContent = "menu"
    //     $menu.style.display = "none"
    // }

    if (refMenuBtn.current.textContent === "menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2> Referencias </h2>
      <button id="menu-button" ref={refMenuBtn} onClick={handleToggleMenu}>
        menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href=" "> Seccion 1 </a>
        <br />
        <a href=" ">Seccion 2</a>
        <br />
        <a href=" ">Seccion 3</a>
        <br />
        <a href=" ">Seccion 4</a>
        <br />
        <a href=" ">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}
