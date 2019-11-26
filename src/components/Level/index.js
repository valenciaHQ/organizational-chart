import React from "react";

import Employee from "../Employee";
import { Title, Employees } from "./styled";

export default props => {
  const { managerId, manager, employees } = props;
  return (
    <>
      <Title>Manager level {managerId}</Title>
      <Employee
        data={managerId === 0 && employees.length > 0 ? employees[0] : manager}
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
    </>
  );
};
