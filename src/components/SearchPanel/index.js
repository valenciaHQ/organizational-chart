import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../actions/employees";

import Alert from "../Alert";
import TagsInput from "../TagsInput";
import Employee from "../Employee";

import { SearchIcon } from "../../styled";
import {
  Label,
  Wrapper,
  SearchBox,
  IconWrapper,
  InputWrapper,
  ResultBox,
  EmployeeWrapper
} from "./styled";
import COLOR from "../../constants/colors";

export default () => {
  const [ids, setIds] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [clearTags, setClearTags] = useState(false);

  const data = useSelector(state => {
    return state.employees;
  });
  const dispatch = useDispatch();

  const handleSetIds = newIds => setIds(newIds);

  const handleGetEmployees = () => {
    setClearTags(true);
    dispatch(getEmployees(ids));
  };

  console.log(data);
  return (
    <Wrapper>
      <Label>Employee id:</Label>
      <SearchBox>
        <InputWrapper>
          <TagsInput selectedIds={ids => handleSetIds(ids)} clear={clearTags} />
          <IconWrapper>
            <SearchIcon
              color={COLOR.BLUE_MARGERITE}
              onClick={() =>
                ids.length === 0 ? setShowAlert(true) : handleGetEmployees()
              }
            />
          </IconWrapper>
        </InputWrapper>
      </SearchBox>
      <ResultBox>
        {data.employees.length > 0 &&
          data.employees.map((employee, index) => (
            <EmployeeWrapper key={index}>
              <Employee data={employee} />
            </EmployeeWrapper>
          ))}
      </ResultBox>
      {showAlert && (
        <Alert message={"You have to write an employee id first"} />
      )}
    </Wrapper>
  );
};
