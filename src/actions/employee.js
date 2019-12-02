import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_ERROR = "FETCH_ERROR";

export const getEmployee = id => {
  return async dispatch => {
    dispatch({
      type: FETCH_REQUEST,
      payload: { loading: true }
    });
    try {
      const responseEmployees = await axios.get(`${BASE_PATH}?id=${id}`);
      return dispatch({
        type: GET_EMPLOYEE,
        payload: { employee: responseEmployees.data[0] }
      });
    } catch (err) {
      return dispatch({ type: FETCH_ERROR, err });
    }
  };
};
