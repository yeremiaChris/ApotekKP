import { initialstate } from "./initialstate";
import { ON_BLUR_SUPPLIER, ON_CHANGE_SUPPLIER, ON_CHANGE_SUPPLIER_IMAGE, SUBMIT_ERROR_SUPPLIER, SUBMIT_SUPPLIER_POST, GET_SUPPLIER, GET_SUPPLIER_DETAIL, EMPTY_FORM_SUPPLIER, SUBMIT_SUPPLIER_PUT } from "../../type";
const supplierReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_SUPPLIER:
      return {
        ...state,
        supplier: action.payload,
      };
    case EMPTY_FORM_SUPPLIER:
      return {
        ...state,
        supplierForm: [
          {
            name: "Nama",
            value: "",
            error: "",
          },
          {
            name: "Image",
            value: "",
            url: "",
            error: "",
          },
        ],
      };
    case SUBMIT_SUPPLIER_PUT:
      console.log(action.payload);
      return {
        ...state,
        supplier: [...state.supplier.map((item) => (item._id === action.payload._id ? action.payload : item))],
      };
    case ON_BLUR_SUPPLIER:
      return {
        ...state,
        supplierForm: [
          ...state.supplierForm.map((item) =>
            item.name === action.payload
              ? {
                  ...item,
                  error: `${item.name} field harus di isi `,
                }
              : item
          ),
        ],
      };
    case ON_CHANGE_SUPPLIER_IMAGE:
      return {
        ...state,
        supplierForm: [
          ...state.supplierForm.map((item) =>
            item.name === "Image"
              ? {
                  ...item,
                  error: "",
                  value: action.payload.value,
                  url: action.payload.url,
                }
              : item
          ),
        ],
      };
    case ON_CHANGE_SUPPLIER:
      return {
        ...state,
        supplierForm: [
          ...state.supplierForm.map((item) =>
            item.name === action.payload.name
              ? {
                  ...item,
                  error: "",
                  value: action.payload.value,
                }
              : item
          ),
        ],
      };
    case SUBMIT_SUPPLIER_POST:
      return {
        ...state,
        supplier: [action.payload, ...state.supplier],
      };
    case SUBMIT_ERROR_SUPPLIER:
      return {
        ...state,
        supplierForm: [...state.supplierForm.map((item) => (item.value.length === 0 ? { ...item, error: `${item.name} field is required` } : item))],
      };
    case GET_SUPPLIER_DETAIL:
      return {
        ...state,
        supplierForm: action.data,
      };
    default:
      return { ...state };
  }
};

export default supplierReducer;
