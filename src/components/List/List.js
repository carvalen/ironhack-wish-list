import React from "react";
import ListItem from "../ListItem/ListItem";


function List(props) {
    // Dentro de List, voy a encontrar removeWish en sus props
    // El componente que tiene que ejecutar removeWish es el boton en su onClick
    // El boton es Hijo de ListItem, por lo cual primero debo pasarlo a ListItem
    // para que ListItem se lo pueda pasar a Button
    return (
      <div>
        {props.wishes.map((wish) => (
          // Por cada uno de los ListItem yo le paso la funcion removeWish 
          // como la prop onClick
          <ListItem key={wish} wish={wish} onClick={props.removeWish} />
        ))}
      </div>
    );
  }


export default List;