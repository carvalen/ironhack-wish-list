import React from "react";
import Button from "../Button/Button";


function ListItem({ wish, onDelete }) {
  return (
    <div className="card">
      <Button className="button" wish={wish} onDelete={onDelete} />
    </div>
  );
}






export default ListItem;