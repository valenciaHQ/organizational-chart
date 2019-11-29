import React, { useState } from "react";
import { connect } from "react-redux";

import Level from "../Level";
import Tooltip from "./Tooltip";

import { Container, LevelContainer } from "./styled";

const EmployeesTable = props => {
  const [levels, setLevels] = useState([
    <LevelContainer key={0}>
      <Level levelId={0} onAdd={levelId => handleAddLevel(levelId)} />
    </LevelContainer>
  ]);

  const handleAddLevel = levelId => {
    const newLevels = [
      ...levels,
      <LevelContainer key={levelId}>
        <Level levelId={levelId} onAdd={levelId => handleAddLevel(levelId)} />
      </LevelContainer>
    ];
    setLevels(newLevels);
  };

  return (
    <Container>
      <Tooltip />
      {levels}
    </Container>
  );
};

const mapStateToProps = state => ({
  levels: state.levels.data
});

export default connect(mapStateToProps, null)(EmployeesTable);
