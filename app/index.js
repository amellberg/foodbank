import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import foodBankReducer from "./reducers";

function getRoot() {
   let root = document.getElementById("root");
   if (!root) {
      root = document.createElement("div");
      root.id = "root";
   }
   return root;
}
document.body.appendChild(getRoot());

const store = createStore(foodBankReducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   getRoot()
);