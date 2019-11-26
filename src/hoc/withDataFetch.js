import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

import reducer from "./reducer";
import initialState from "./state";
import ACTIONS from "./actions";

export default (managerId, WrappedComponent) => props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { manager, employees } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_IN_PROGRESS });
    //Getting manager profile
    console.log("Fetching manager with id: ", managerId);
    axios
      .get(`${BASE_PATH}?id=${managerId}`)
      .then(response => {
        dispatch({ type: ACTIONS.MANAGER_DATA, payload: response.data });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: "There was an error while fetching data"
        });
      });

    //Getting employees managed by
    console.log("Fetching employees with id: ", managerId);
    axios
      .get(`${BASE_PATH}?manager=${managerId}`)
      .then(response => {
        dispatch({
          type: ACTIONS.EMPLOYEES_MANAGED_BY,
          payload: response.data
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: "There was an error while fetching data"
        });
      });
  }, []);

  return (
    <WrappedComponent
      managerId={managerId}
      manager={manager}
      employees={employees}
      {...props}
    />
  );
};
