import handleCart from "./handleCart";
import { combineReducers } from "redux";
import { user } from "./user";
const rootReducers = combineReducers({
  handleCart,
  user,
});
export default rootReducers;
