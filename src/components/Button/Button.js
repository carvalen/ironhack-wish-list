import React from "react";

function Button(props) {
    // cuando props.onClick se ejecute en el boton, se va a estar ejecutando handleClick.
    // handleClick va a ejecutar removeWish con el nombre del wish
    return <button onClick={props.onClick}>remove</button>;
  }
  ​
  ​
  // Yo le paso la funcion desde App hasta Button por que para modificar el array necesito poder ejecutar 
  // setWishes, y setWishes esta unicamente en App.

export default Button;

