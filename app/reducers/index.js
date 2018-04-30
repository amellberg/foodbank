const initialState = {
   foodItems: [
      {
         _id: 100, name: "Proteinpulver",
         carbs: 8.4, fat: 3.3, protein: 28.1, kcal: 313
      },
      {
         _id: 101, name: "Mellanmjölk",
         carbs: 18.3, fat: 2.1, protein: 12.6, kcal: 135
      },
   ]
};
let nextId = 102;

function foodBankReducer(state = initialState, action) {
   switch (action.type) {
      case "NEW_FOOD_ITEM":
         return {
            ...state,
            foodItems: [
               ...state.foodItems,
               {
                  _id: nextId++, name: "Untitled item",
                  carbs: 0.0, fat: 0.0, protein: 0.0, kcal: 0.0
               }
            ]
         };

      case "DELETE_ALL_ITEMS":
         return {
            ...state,
            foodItems: []
         };

      default:
         return state;
   }
};

export default foodBankReducer;
