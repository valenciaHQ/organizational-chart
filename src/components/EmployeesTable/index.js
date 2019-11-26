import React from "react";
import { connect } from "react-redux";

import Level from "../Level";
import withDataFetch from "../../hoc/withDataFetch";
import { Container, LevelContainer } from "./styled";

import { addManager } from "../../actions/managers";

const EmployeesTable = props => {
  const { managers } = props;
  return (
    <Container>
      <button onClick={() => addManager(2)}>Holis</button>
      {managers.map((manager, index) => {
        const EnhancedLevel = withDataFetch(manager, Level);
        return (
          <LevelContainer key={index}>
            <EnhancedLevel />
          </LevelContainer>
        );
      })}
    </Container>
  );
};

const mapStateToProps = state => ({
  managers: state.managers
});

const mapDispatchToProps = dispatch => ({
  addManager: manager => {
    console.log("New manager");
    return dispatch(addManager(manager));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);
