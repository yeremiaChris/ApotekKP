//Action Types
import { GET_SUPPLIER } from "../../type";
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
      console.log(error);
    }
  };
}
