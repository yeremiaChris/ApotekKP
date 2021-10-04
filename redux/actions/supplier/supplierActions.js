//Action Types
import {
  GET_SUPPLIER,
  ON_BLUR_SUPPLIER,
  ON_CHANGE_SUPPLIER,
  SUBMIT_ERROR_SUPPLIER,
  SUBMIT_SUPPLIER_POST,
  ON_CHANGE_SUPPLIER_IMAGE,
  DISABLED_TRUE,
  DISABLED_FALSE,
} from "../../type";
import axios from "../../../axios";
// medicine
export function getData() {
  console.log("tst");
  return async (dispatch) => {
    try {
      const data = await axios.get("/supplier");
      console.log(data);
      dispatch({
        type: GET_SUPPLIER,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function onBlur(name) {
  return (dispatch) => {
    dispatch({ type: ON_BLUR_SUPPLIER, payload: name });
  };
}

export function onChange(data) {
  return (dispatch) => {
    dispatch({ type: ON_CHANGE_SUPPLIER, payload: data });
  };
}

export function submitError(data) {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_ERROR_SUPPLIER,
    });
  };
}

export function submitSupplierPost(router) {
  return async (dispatch, getState) => {
    const form = getState().supplier.supplierForm;
    const formData = new FormData();
    formData.append("name", form[0].value);
    formData.append("image", form[1].value);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    dispatch({
      type: DISABLED_TRUE,
    });
    try {
      console.log("test");
      const data = await axios.post("/supplier", formData, config);
      console.log(data);
      router.push("/supplier");
      dispatch({
        type: SUBMIT_SUPPLIER_POST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: DISABLED_FALSE,
    });
  };
}

export function onChangeImage(data) {
  return (dispatch) => {
    dispatch({ type: ON_CHANGE_SUPPLIER_IMAGE, payload: data });
  };
}
