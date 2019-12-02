import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export const INIT_LEVEL = "INIT_LEVEL";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_ERROR = "FETCH_ERROR";
export const GET_EMPLOYEES = "GET_EMPLOYEES";

export const initLevel = level => {
  return async dispatch => {
    dispatch({
      type: FETCH_REQUEST,
      payload: { level: level, loadingManager: true, loadingEmployees: false }
    });
    try {
      const responseManager = await axios.get(`${BASE_PATH}?id=${level}`);
      const responseEmployees = await axios.get(
        `${BASE_PATH}?manager=${level}`
      );
      return dispatch({
        type: INIT_LEVEL,
        payload: {
          level: level,
          manager: responseManager.data,
          employees: responseEmployees.data
        }
      });
    } catch (err) {
      return dispatch({ type: FETCH_ERROR, err });
    }
  };
};

export const getEmployees = level => {
  return async dispatch => {
    dispatch({
      type: FETCH_REQUEST,
      payload: { level: level, loadingManager: false, loadingEmployees: true }
    });
    try {
      const responseEmployees = await axios.get(
        `${BASE_PATH}?manager=${level}`
      );
      return dispatch({
        type: GET_EMPLOYEES,
        payload: {
          level: level,
          employees: responseEmployees.data
        }
      });
    } catch (err) {
      return dispatch({ type: FETCH_ERROR, err });
    }
  };
};
