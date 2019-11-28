import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export const ADD_LEVEL = "ADD_LEVEL";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_ERROR = "FETCH_ERROR";

export const addLevel = level => {
  return async dispatch => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const responseManager = await axios.get(`${BASE_PATH}?id=${level}`);
      const responseEmployees = await axios.get(
        `${BASE_PATH}?manager=${level}`
      );

      return dispatch({
        type: ADD_LEVEL,
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
