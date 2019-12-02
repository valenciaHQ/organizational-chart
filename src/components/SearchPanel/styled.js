import styled from "styled-components";
import COLOR from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconWrapper = styled.div`
  min-width: 50px;
  text-align: end;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  height: auto;
`;

export const Input = styled.input`
  height: 25px;
  width: 75%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;

  border-radius: 10px;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.BLUE_MARGERITE};
  padding: 5px;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-top: 20px;
  border: 1px solid red;
`;
