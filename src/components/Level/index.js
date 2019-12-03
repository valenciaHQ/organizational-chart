import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initLevel, getEmployees } from "../../actions/levels";

import Employee from "../Employee";
import Alert from "../Alert";

import { Wrapper, Title, Employees, RightArrow, DownArrow } from "./styled";

export default ({ levelId, onAdd }) => {
  const levelData = useSelector(state => {
    const data = state.levels.data;
    return data && data.size > 0 && data.get(levelId);
  });
  const isLastLevel = useSelector(state => {
    const data = state.levels.data;
    return data && data.size - 1 === levelId;
  });

  const dispatch = useDispatch();

  const isValidEmployees = () =>
    levelId !== 0 && !levelData.loadingEmployees && levelData.employees;

  const isValidData = () =>
    levelData &&
    !levelData.loadingManager &&
    (levelData.employees || levelData.manager);

  useEffect(() => {
    dispatch(initLevel(levelId));
  }, [dispatch, levelId]);

  return (
    <Wrapper>
      {isValidData() && (
        <>
          <Title>Manager level {levelId}</Title>
          <Employee
            data={levelId === 0 ? levelData.employees : levelData.manager[0]}
            rightArrow={isLastLevel && <RightArrow onClick={() => onAdd()} />}
            downArrow={
              levelId !== 0 && (
                <DownArrow onClick={() => dispatch(getEmployees(levelId))} />
              )
            }
          />
          {isValidEmployees() && levelData.employees.length > 0 && (
            <>
              <Title>Manages</Title>
              <Employees>
                {levelData.employees.map((employee, index) => {
                  return <Employee key={index} data={employee} />;
                })}
              </Employees>
            </>
          )}
          {isValidEmployees() && levelData.employees.length === 0 && (
            <Alert
              message={`We are sorry, ${levelData.manager[0].first} has not employees in charge`}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};
