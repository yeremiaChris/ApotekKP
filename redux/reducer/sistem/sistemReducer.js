import { initialstate } from "./initialState";
import { DISABLED_TRUE, DISABLED_FALSE } from "../../type";
const medicineReducer = (state = initialstate, action) => {
  switch (action.type) {
    case DISABLED_TRUE:
      return {
        ...state,
        disabled: true,
      };
    case DISABLED_FALSE:
      return {
        ...state,
        disabled: false,
      };
    default:
      return { ...state };
  }
};

export default medicineReducer;
