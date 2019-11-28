import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Level from "../Level";
import Tooltip from "./Tooltip";

import { Container, LevelContainer } from "./styled";

const EmployeesTable = props => {
  const { levels } = props;
  return (
    <Container>
      <Tooltip />
      {levels.length > 0 &&
        levels.map((level, index) => {
          return (
            <LevelContainer key={index}>
              <Level data={level} />
            </LevelContainer>
          );
        })}
    </Container>
  );
};

const mapStateToProps = state => ({
  levels: state.levels.data
});

export default connect(mapStateToProps, null)(EmployeesTable);
