import medicineReducer from "./medicine/medicineReducer";
import sistemReducer from "./sistem/sistemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  medicine: medicineReducer,
  sistem: sistemReducer,
});

export default rootReducer;
