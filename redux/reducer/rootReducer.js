import medicineReducer from "./medicine/medicineReducer";
import supplierReducer from "./supplier/supplierReducer";
import sistemReducer from "./sistem/sistemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  medicine: medicineReducer,
  supplier: supplierReducer,
  sistem: sistemReducer,
});

export default rootReducer;
