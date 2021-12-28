//Action Types
import { DISABLED_TRUE, EMPTY_FORM, SUBMIT_MEDICINE_PUT, GET_MEDICINE_DETAIL, DISABLED_FALSE, GET_MEDICINE, DELETE_MEDICINE, ON_BLUR_MEDICINE, ON_CHANGE_MEDICINE, SUBMIT_ERROR, SUBMIT_MEDICINE_POST } from "../../type";
import axios from "../../../axios";
// medicine
export function getData() {
  return async (dispatch) => {
    try {
      const data = await axios.get("/medicine");
      dispatch({
        type: GET_MEDICINE,
        payload: data.data,
      });
    } catch (error) {
      // console.log(error);
    }
  };
}

export function emptyForm() {
  return (dispatch) => {
    dispatch({ type: EMPTY_FORM });
  };
}

export function getDataDetail(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/medicine/${id}`);
      const form = [
        {
          name: "Nama",
          value: data.name,
          error: "",
        },
        {
          name: "Jenis",
          value: data.type,
          error: "",
        },
        {
          name: "Satuan",
          value: data.unit,
          error: "",
        },
        {
          name: "Price",
          value: data.price,
          error: "",
        },
      ];
      dispatch({
        type: GET_MEDICINE_DETAIL,
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDataMedicine(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`/medicine/${id}`);
      dispatch({
        type: DELETE_MEDICINE,
        id: id,
      });
    } catch (error) {
      // console.log(error);
    }
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

export function submitMedicinePost(router) {
  return async (dispatch, getState) => {
    const form = getState().medicine.medicineForm;
    const dataPost = {
      name: form[0].value,
      type: form[1].value,
      unit: form[2].value,
      price: parseInt(form[3].value),
      supply: 0,
    };
    dispatch({
      type: DISABLED_TRUE,
    });
    try {
      const data = await axios.post("/medicine", dataPost);
      router.push("/");
      dispatch({
        type: SUBMIT_MEDICINE_POST,
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

export function submitMedicinePut(router) {
  return async (dispatch, getState) => {
    const form = getState().medicine.medicineForm;
    const dataPost = {
      name: form[0].value,
      type: form[1].value,
      unit: form[2].value,
      price: parseInt(form[3].value),
    };
    dispatch({
      type: DISABLED_TRUE,
    });
    try {
      const data = await axios.put(`/medicine/${router.query.id}`, dataPost);
      router.push("/");
      dispatch({
        type: SUBMIT_MEDICINE_PUT,
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
