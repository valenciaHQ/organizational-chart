import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Level from "../Level";
import Tooltip from "./Tooltip";

import withDataFetch from "../../hoc/withDataFetch";
import { Container, LevelContainer } from "./styled";

const EmployeesTable = props => {
  const { managers } = props;

  return (
    <Container>
      <Tooltip />
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

const mapStateToProps = state => ({
  managers: state.managers
});

export default connect(mapStateToProps, null)(EmployeesTable);
