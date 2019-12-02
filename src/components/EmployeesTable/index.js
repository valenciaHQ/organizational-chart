import React, { useState } from "react";
import { connect } from "react-redux";

import Level from "../Level";
import Tooltip from "./Tooltip";

import { Container, LevelContainer } from "./styled";
const INITIAL_LEVEL = 0;

const EmployeesTable = () => {
  const [levels, setLevels] = useState([INITIAL_LEVEL]);
  const handleAddLevel = () => setLevels([...levels, levels.length]);

  return (
    <Container>
      <Tooltip />
      {levels.map(level => {
        return (
          <LevelContainer key={level}>
            <Level levelId={level} onAdd={() => handleAddLevel()} />
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
