import { initialstate } from "./initialstate";
import {
  GET_MEDICINE,
  ON_BLUR_MEDICINE,
  ON_CHANGE_MEDICINE,
  SUBMIT_ERROR,
} from "../type";
const medicineReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_MEDICINE:
      return {
        ...state,
        medicine: action.payload,
      };
    case ON_BLUR_MEDICINE:
      return {
        ...state,
        medicineForm: [
          ...state.medicineForm.map((item) =>
            item.name === action.payload
              ? {
                  ...item,
                  error:
                    `${item.name} field harus di isi ` +
                    `${item.name === "Price" ? "dan harus angka" : ""}`,
                }
              : item
          ),
        ],
      };
    case ON_CHANGE_MEDICINE:
      return {
        ...state,
        medicineForm: [
          ...state.medicineForm.map((item) =>
            item.name === action.payload.name
              ? { ...item, error: "", value: action.payload.value }
              : item
          ),
        ],
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        medicineForm: [
          ...state.medicineForm.map((item) =>
            !item.value
              ? {
                  ...item,
                  error:
                    `${item.name} field harus di isi` +
                    `${item.name === "Price" ? "dan harus angka" : ""}`,
                }
              : item
          ),
        ],
      };
    default:
      return { ...state };
  }
};

export default medicineReducer;
