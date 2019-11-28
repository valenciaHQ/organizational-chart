import React from "react";
import { connect } from "react-redux";
import { addManager } from "../../actions/managers";

import Employee from "../Employee";
import { Wrapper, Title, Employees, Icon } from "./styled";

const Level = props => {
  const { managerId, manager, employees, managers, addManager } = props;

  console.log("Manager id: ", managerId);
  console.log("Employees: ", employees);

  const managerInfo =
    managerId === 0 && employees && employees.length > 0
      ? employees[0]
      : manager;

  return (
    <Wrapper>
      <Title>Manager level {managerId}</Title>
      <Employee
        data={managerInfo}
        subComponent={
          managerId === managers[managers.length - 1] && (
            <Icon onClick={() => addManager()} />
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
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  managers: state.managers
});

const mapDispatchToProps = dispatch => ({
  addManager: manager => dispatch(addManager(manager))
});

export default connect(mapStateToProps, mapDispatchToProps)(Level);
