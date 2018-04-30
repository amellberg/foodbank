import { connect } from "react-redux";
import Control from "../components/Control";
import { newFoodItem, deleteAll } from "../actions";

function mapDispatchToProps(dispatch) {
   return {
      newFoodItem: () => { dispatch(newFoodItem()); },
      deleteAll: () => { dispatch(deleteAll()); }
   };
}

// First arg null = currently not subscribing to store updates
const ControlContainer = connect(null, mapDispatchToProps)(Control)

export default ControlContainer;
