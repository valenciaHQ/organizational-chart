import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { getEmployee } from "../../actions/employee";
import { SearchIcon } from "../../styled";
import COLOR from "../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  height: 25px;
  width: 75%;
  border: none;

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  border-radius: 10px;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.BLUE_MARGERITE};
  padding: 5px;
`;

const ResultBox = styled.div``;

export default () => {
  const [id, setId] = useState(null);

  const employeeData = useSelector(state => {
    console.log(("Employee", state.employee));
    return state;
  });
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <SearchBox>
        <InputWrapper>
          <Input onChange={e => setId(e.target.value)} type="text" />
          <SearchIcon
            color={COLOR.BLUE_MARGERITE}
            onClick={() => dispatch(getEmployee(id))}
          />
        </InputWrapper>
      </SearchBox>
      <ResultBox>La data</ResultBox>
    </Wrapper>
  );
};
