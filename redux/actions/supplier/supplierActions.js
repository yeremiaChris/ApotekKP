//Action Types
import { GET_SUPPLIER, ON_BLUR_SUPPLIER, ON_CHANGE_SUPPLIER, SUBMIT_ERROR_SUPPLIER, SUBMIT_SUPPLIER_POST, ON_CHANGE_SUPPLIER_IMAGE, DISABLED_TRUE, DISABLED_FALSE, GET_SUPPLIER_DETAIL, EMPTY_FORM_SUPPLIER, SUBMIT_SUPPLIER_PUT } from "../../type";
import axios from "../../../axios";
// medicine
export function getData() {
  return async (dispatch) => {
    try {
      const data = await axios.get("/supplier");
      dispatch({
        type: GET_SUPPLIER,
        payload: data.data,
      });
    } catch (error) {
      // console.log(error);
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
      const data = await axios.post("/supplier", formData, config);
      router.push("/supplier");
      dispatch({
        type: SUBMIT_SUPPLIER_POST,
        payload: data.data,
      });
    } catch (error) {
      // console.log(error);
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

export function getDataDetail(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/supplier/${id}`);
      const form = [
        {
          name: "Nama",
          value: data.name,
          error: "",
        },
        {
          name: "Image",
          value: data.image,
          url: process.env.baseApiUrl + "uploads/" + data.media.defaultImage,
          error: "",
        },
      ];
      dispatch({
        type: GET_SUPPLIER_DETAIL,
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function emptyForm() {
  return (dispatch) => {
    dispatch({ type: EMPTY_FORM_SUPPLIER });
  };
}

export function submitSupplierPut(router) {
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
      const data = await axios.put(`/supplier/${router.query.id}`, formData, config);
      router.push("/supplier");
      dispatch({
        type: SUBMIT_SUPPLIER_PUT,
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
