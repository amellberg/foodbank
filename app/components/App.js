import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TableContainer from "../containers/TableContainer"
import ControlContainer from "../containers/ControlContainer"

const App = () => {
   return (
      <div>
         <ControlContainer />
         <TableContainer />
      </div>
   );
};

export default App;
