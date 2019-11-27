import React from "react";
import { connect } from "react-redux";
import { addManager } from "../../actions/managers";

import Employee from "../Employee";
import { Title, Employees, NextManager, Icon } from "./styled";

const Level = props => {
  const { managerId, manager, employees, managers, addManager } = props;
  return (
    <>
      <Title>Manager level {managerId}</Title>
      <Employee
        data={managerId === 0 && employees.length > 0 ? employees[0] : manager}
      />
      {managerId === managers[managers.length - 1] && (
        <NextManager>
          <Icon onClick={() => addManager()} />
        </NextManager>
      )}
      {managerId !== 0 && (
        <>
          <Title>Manages</Title>
          <Employees>
            {employees &&
              employees.map((employee, index) => {
                return <Employee key={index} data={employee} withMargin />;
              })}
          </Employees>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  managers: state.managers
});

const mapDispatchToProps = dispatch => ({
  addManager: manager => dispatch(addManager(manager))
});

export default connect(mapStateToProps, mapDispatchToProps)(Level);
