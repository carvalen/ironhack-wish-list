import React from "react";
import Button from "../Button/Button";


function ListItem(props) {
    // Dentro de ListItem puedo acceder a la function removeWish (de App) bajo el nombre
    // onClick, la renombre cuando le pase la funcion por props en la linea 55
    // Si yo le paso la function props.onClick, cuando se ejecute en el onClick del boton
    // en vez de recibir el wish como argumento va a recibir el evento
    // props.onClick(event) lo cual no nos sirve
    // Yo que podemos hacer es crear otra funcion que ejecute dentro la funcion props.onClick
    // (removeWish) pasandole el nombre del wish.
    // Esto lo podemos hacer por que dentro de ListItem ya tenemos el nombre del wish que llega por Props desde List
    // props.wish
    const handleClick = () => {
      props.onClick(props.wish)
    }
    return (
      <div>
        <p>{props.wish}</p>
        <Button onClick={handleClick} />
      </div>
    );
    };
    
export default ListItem;