import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../actions/employees";

import Alert from "../Alert";
import TagsInput from "../TagsInput";
import Employee from "../Employee";

import { SearchIcon } from "../../styled";
import {
  Wrapper,
  SearchBox,
  IconWrapper,
  InputWrapper,
  ResultBox
} from "./styled";
import COLOR from "../../constants/colors";

export default () => {
  const [ids, setIds] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [clearTags, setClearTags] = useState(false);

  const employeeData = useSelector(state => {
    console.log("STATE: ", state.employees);
    return state.employees;
  });
  const dispatch = useDispatch();

  const handleSetIds = newIds => setIds(newIds);

  const handleGetEmployees = () => {
    setClearTags(true);
    dispatch(getEmployees(ids));
  };

  return (
    <Wrapper>
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
        {employeeData.length > 0 &&
          employeeData.map((employee, index) => {
            return <Employee key={index} data={employee} />;
          })}
      </ResultBox>
      {showAlert && (
        <Alert message={"You have to write an employee id first"} />
      )}
    </Wrapper>
  );
};
