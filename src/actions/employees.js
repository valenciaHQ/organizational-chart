import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export const GET_EMPLOYEES_BY_ID = "GET_EMPLOYEES_BY_ID";
export const FETCH_EMPLOYEES_REQUEST = "FETCH_REQUEST";
export const FETCH_EMPLOYEES_ERROR = "FETCH_ERROR";

export const getEmployees = ids => {
  const urlParam = ids.map(id => `&id=${id}`).join("");
  return async dispatch => {
    dispatch({
      type: FETCH_EMPLOYEES_REQUEST,
      payload: { loading: true }
    });
    try {
      const responseEmployees = await axios.get(`${BASE_PATH}?${urlParam}`);
      return dispatch({
        type: GET_EMPLOYEES_BY_ID,
        payload: { employees: responseEmployees.data }
      });
    } catch (err) {
      return dispatch({ type: FETCH_EMPLOYEES_ERROR, err });
    }
  };
};
