import React, { useEffect } from "react";
import { Wrapper, Title, Employees, Icon } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { fillLevel } from "../../actions/levels";

import Employee from "../Employee";

export default ({ levelId, onAdd }) => {
  const levelData = useSelector(state => {
    const data = state.levels.data;
    return data && data.size > 0 && data.get(levelId);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillLevel(levelId));
  }, [dispatch, levelId]);

  console.log("levelData", levelData);
  console.log("No levelData", !levelData);
  console.log("levelData.isLoading", levelData && levelData.isLoading);
  console.log("levelData.isLastLevel", levelData && levelData.isLastLevel);

  return (
    <Wrapper>
      {levelData && !levelData.isLoading ? (
        <>
          <Title>Manager level {levelId}</Title>
          <Employee
            data={
              levelId === 0 && levelData.employees
                ? levelData.employees
                : levelData.manager
            }
            subComponent={
              levelData.isLastLevel && (
                <Icon onClick={() => onAdd(levelId + 1)} />
              )
            }
          />
          {levelId !== 0 && levelData.length > 0 && (
            <>
              <Title>Manages</Title>
              <Employees>
                {levelData.employees.map((employee, index) => {
                  return <Employee key={index} data={employee} />;
                })}
              </Employees>
            </>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </Wrapper>
  );
};
