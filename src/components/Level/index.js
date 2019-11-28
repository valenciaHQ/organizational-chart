import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addLevel } from "../../actions/levels";

import Employee from "../Employee";
import { Wrapper, Title, Employees, Icon } from "./styled";

const Level = props => {
  const { data, lastLevel, isLoading, addLevel } = props;
  const { level, manager, employees } = data;

  console.log("Data: ", props.data);
  useEffect(() => {
    if (level === 0) {
      props.addLevel(level);
    }
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Wrapper>
      <Title>Manager level {level}</Title>

      <Employee
        data={level === 0 ? employees[0] : manager}
        subComponent={
          level === lastLevel && <Icon onClick={() => addLevel(level + 1)} />
        }
      />

      {level !== 0 && employees.length > 0 && (
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

const mapStateToProps = ({ levels }) => ({
  isLoading: levels.isLoading,
  lastLevel: levels.data[levels.data.length - 1].level
});

const mapDispatchToProps = dispatch => ({
  addLevel: level => dispatch(addLevel(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(Level);
