import React, { useRef } from "react";

export default function Ref() {
  const buttonRef = useRef(null);

  function handleClick() {
    buttonRef.current.style.opacity = 0.5;
    buttonRef.current.innerHTML = "¡¡¡ Cambió !!!"; // esto ya no es la manera correcta de usarlo, aunque funcione, debería hacerse de la forma con la que se trabaja en React
    //usando una variable y cambiendo el state.
  }
  return (
    <button ref={buttonRef} onClick={handleClick}>
      Click para cambiar mi opacidad
    </button>
  );
}
