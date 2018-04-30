import React from "react";
import ReactDOM from "react-dom";
import "./Control.css"

const Control = ({ newFoodItem, deleteAll }) => (
   <div className="buttons">
      <button className="button" onClick={newFoodItem}>New</button>
      <button className="button" onClick={deleteAll}>Delete all</button>
   </div>
);

export default Control;
