import React from "react";
import ReactDOM from "react-dom";
import "./Table.css"

const TableRow = ({ foodItem }) => {
   return (
      <tr>
         <td className="col id">{foodItem._id}</td>
         <td className="col name">{foodItem.name}</td>
         <td className="col stat">{foodItem.carbs}</td>
         <td className="col stat">{foodItem.fat}</td>
         <td className="col stat">{foodItem.protein}</td>
         <td className="col stat">{foodItem.kcal}</td>
      </tr>
   );
};

const Table = ({ foodItems }) => {
   const rows = foodItems.map(foodItem => (
      <TableRow key={foodItem._id} foodItem={foodItem} />
   ));
   return (
      <div className="main-table">
         <table>
            <thead><tr>
               <th className="col id">ID</th>
               <th className="col name">Name</th>
               <th className="col stat">Carbs</th>
               <th className="col stat">Fat</th>
               <th className="col stat">Protein</th>
               <th className="col stat">Kcal</th>
            </tr></thead>
            <tbody>{rows}</tbody>
         </table>
      </div>
   );
};

export default Table;