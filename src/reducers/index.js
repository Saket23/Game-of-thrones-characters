import { combineReducers } from "redux";
import getData from "./getData";
import getSingleData from "./getSingleData";

export default combineReducers({
  getData,
  getSingleData
});
