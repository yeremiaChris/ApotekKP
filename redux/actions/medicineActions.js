//Action Types
import {
  GET_MEDICINE,
  ON_BLUR_MEDICINE,
  ON_CHANGE_MEDICINE,
  SUBMIT_ERROR,
} from "../type";

// medicine
export function getData() {
  return (dispatch) => {
    dispatch({
      type: GET_MEDICINE,
      payload: [
        {
          id: "1",
          name: "Paramex",
          type: "Pil",
          unit: "Tablet",
          price: 2000,
          supply: 10,
        },
        {
          id: "2",
          name: "Panadol",
          type: "Pil",
          unit: "Tablet",
          price: 2000,
          supply: 10,
        },
      ],
    });
  };
}

export function onBlur(name) {
  return (dispatch) => {
    dispatch({
      type: ON_BLUR_MEDICINE,
      payload: name,
    });
  };
}

export function onChange(data) {
  return (dispatch) => {
    dispatch({
      type: ON_CHANGE_MEDICINE,
      payload: data,
    });
  };
}

export function submitError(data) {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_ERROR,
    });
  };
}
