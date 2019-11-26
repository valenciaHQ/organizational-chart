import React from "react";

import Employee from "../Employee";
import withDataFetch from "../../hoc/withDataFetch";
import { Container, LevelContainer, Title, Employees } from "./styled";

const Table = ({ employees, manager, managerId }) => {
  return (
    <Container>
      <LevelContainer>
        <Title>Manager level {managerId}</Title>
        <Employee
          data={
            managerId === 0 && employees.length > 0 ? employees[0] : manager
          }
        />
        {managerId !== 0 && (
          <>
            <Title>Manages</Title>
            <Employees>
              {employees &&
                employees.map((employee, index) => {
                  console.log("Employee map: ", employee);
                  return <Employee key={index} data={employee} />;
                })}
            </Employees>
          </>
        )}
      </LevelContainer>
    </Container>
  );
};

export default withDataFetch(0, Table);
