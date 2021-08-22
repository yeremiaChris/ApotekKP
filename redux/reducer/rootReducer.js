import medicineReducer from "./medicineReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  medicine: medicineReducer,
});

export default rootReducer;
