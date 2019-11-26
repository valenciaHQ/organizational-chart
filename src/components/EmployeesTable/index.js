import React, { useEffect, useReducer } from "react";
import axios from "axios";

import Employee from "../Employee";
import { Container, Employees, Title } from "./styled";
import { BASE_PATH } from "../../constants/APIroutes";

import reducer from "./reducer";
import initialState from "./state";
import ACTIONS from "./actions";

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_IN_PROGRESS });
    axios
      .get(`${BASE_PATH}?manager=0`)
      .then(response => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: "There was an error while fetching data"
        });
      });
  }, []);

  const currentLevel = 0;

  return (
    <Container>
      <Title>Manager level {currentLevel}</Title>
      <Employees>
        {data &&
          data.map((employee, index) => {
            return <Employee key={index} data={employee} />;
          })}
      </Employees>
    </Container>
  );
};
