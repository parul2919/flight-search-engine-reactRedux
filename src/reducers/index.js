import { combineReducers } from "redux";
import flights from "./data";
import cart from "./cart";

const rootReducer = combineReducers({
  flights,
  cart
});

export default rootReducer;
