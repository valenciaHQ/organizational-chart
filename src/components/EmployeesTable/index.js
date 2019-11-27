import React from "react";
import { connect } from "react-redux";

import Level from "../Level";
import withDataFetch from "../../hoc/withDataFetch";
import { Container, LevelContainer } from "./styled";

import { addManager } from "../../actions/managers";

const EmployeesTable = props => {
  const { managers } = props;
  console.log("Managers: ", managers);
  return (
    <Container>
      <button onClick={() => props.addManager()}>Holis</button>
      {managers &&
        managers.map((manager, index) => {
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

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    managers: state.managers
  };
};

const mapDispatchToProps = dispatch => ({
  addManager: manager => dispatch(addManager(manager))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);
