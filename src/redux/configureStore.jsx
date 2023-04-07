import { createStore, combineReducers } from "redux";
import userReducer from "./User";
const reducer = combineReducers({
  user: userReducer,
});
const store = createStore(reducer);
export default store;
