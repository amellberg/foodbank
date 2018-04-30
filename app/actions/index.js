export function newFoodItem() {
   return { type: "NEW_FOOD_ITEM" };  // Add defaults here instead?
}

export const deleteAll = () => ({
   type: "DELETE_ALL_ITEMS"
});