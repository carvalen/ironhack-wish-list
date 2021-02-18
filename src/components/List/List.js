import React from "react";
import ListItem from "../ListItem/ListItem";


function List({ wishesList, startwishList }) {
    
  const onDelete = (wish) => {
    let newList = [...wishesList];


    //filtrar elementos del array
    newList = newList.filter((value) => value.wish != wish);

    startwishList(newList);
  };

  //array--->undefined ?¿
  return wishesList.map((value, index) => (

    <ListItem key={index} wish={value.wish} onDelete={onDelete}></ListItem>

  ));
}


export default List;