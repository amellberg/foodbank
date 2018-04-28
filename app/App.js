import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const foodItems = [
   {
      name: "Proteinpulver",
      carbs: 8.4, fat: 3.3, protein: 28.1, kcal: 313
   },
   {
      name: "Mellanmjölk",
      carbs: 18.3, fat: 2.1, protein: 12.6, kcal: 135
   },
];



const App = () => {
   const foods = foodItems.map(food => (
      <li>{food.name}, kcal: {food.kcal}</li>
   ));
   return (
      <div className="App">
         <ul>{foods}</ul>
         <button>New</button>
      </div>
   );
};

export default App;
