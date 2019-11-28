import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addLevel } from "../../actions/levels";

import Employee from "../Employee";
import { Wrapper, Title, Employees, Icon } from "./styled";

const Level = props => {
  const { level, manager, employees } = props.data;

  useEffect(() => {
    if (level === 0) props.addLevel(level);
  }, []);

  const managerInfo = "Lala";
  return (
    <Wrapper>
      <Title>Manager level {level}</Title>
      {/*
      <Employee
        data={managerInfo}
        subComponent={
          managerId === managers[managers.length - 1] && (
            <Icon onClick={() => addLevel(managerId + 1)} />
          )
        }
      />
      {managerId !== 0 && employees.length > 0 && (
        <>
          <Title>Manages</Title>
          <Employees>
            {employees.map((employee, index) => {
              return <Employee key={index} data={employee} />;
            })}
          </Employees>
        </>
      )}
      */}
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addLevel: level => dispatch(addLevel(level))
});

export default connect(null, mapDispatchToProps)(Level);
