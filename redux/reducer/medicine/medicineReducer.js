import { initialstate } from "./initialstate";
import {
  GET_MEDICINE,
  EMPTY_FORM,
  SUBMIT_MEDICINE_PUT,
  GET_MEDICINE_DETAIL,
  DELETE_MEDICINE,
  ON_BLUR_MEDICINE,
  ON_CHANGE_MEDICINE,
  SUBMIT_ERROR,
  SUBMIT_MEDICINE_POST,
} from "../../type";
const medicineReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_MEDICINE:
      return {
        ...state,
        medicine: action.payload,
      };
    case EMPTY_FORM:
      return {
        ...state,
        medicineForm: [
          {
            name: "Nama",
            value: "",
            error: "",
          },
          {
            name: "Jenis",
            value: "Tablet",
            error: "",
          },
          {
            name: "Satuan",
            value: "kg",
            error: "",
          },
          {
            name: "Price",
            value: "",
            error: "",
          },
        ],
      };
    case GET_MEDICINE_DETAIL:
      return {
        ...state,
        medicineForm: action.data,
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
    case SUBMIT_MEDICINE_POST:
      return {
        ...state,
        medicine: [action.payload, state.medicine],
      };
    case SUBMIT_MEDICINE_PUT:
      return {
        ...state,
        medicine: [
          ...state.medicine.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        ],
      };

    case DELETE_MEDICINE:
      return {
        ...state,
        medicine: [...state.medicine.filter((el) => el._id !== action.id)],
      };
    default:
      return { ...state };
  }
};

export default medicineReducer;
