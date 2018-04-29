import { connect } from "react-redux";
import Table from "../components/Table";

// Called every time the store changes
function mapStateToProps(state) {
   return { foodItems: state.foodItems }
};

//const mapDispatchToProps = dispatch => (
//
//);

const TableContainer = connect(mapStateToProps)(Table)

export default TableContainer;