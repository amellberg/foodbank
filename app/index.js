import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


function getRoot() {
   let root = document.getElementById("root");
   if (!root) {
      root = document.createElement("div");
      root.id = "root";
   }
   return root;
}

document.body.appendChild(getRoot());

ReactDOM.render(
   <App />,
   getRoot()
);