import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../actions/employee";

import TagsInput from "../TagsInput";

import { SearchIcon } from "../../styled";
import { Wrapper, SearchBox, InputWrapper, ResultBox } from "./styled";
import COLOR from "../../constants/colors";

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
          <TagsInput selectedIds={ids => console.log(ids)} />
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
