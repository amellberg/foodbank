import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const TableRow = ({ foodItem }) => {
   return (
      <tr>
         <td style={{ width: "10%" }}>{foodItem._id}</td>
         <td style={{ width: "30%" }}>{foodItem.name}</td>
         <td style={{ width: "10%" }}>{foodItem.carbs}</td>
         <td style={{ width: "10%" }}>{foodItem.fat}</td>
         <td style={{ width: "10%" }}>{foodItem.protein}</td>
         <td style={{ width: "10%" }}>{foodItem.kcal}</td>
      </tr>
   );
};

const Table = ({ foodItems }) => {
   const rows = foodItems.map(foodItem => <TableRow foodItem={foodItem} />);
   return (
      <table>
         <thead><tr>
            <th>ID</th>
            <th>Name</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Protein</th>
            <th>Kcal</th>
         </tr></thead>
         <tbody>{rows}</tbody>
      </table>
   );
};

const App = () => {
   return (
      <div className="main-table">
         <Table foodItems={foodItems} />
      </div>
   );
};

export default App;
