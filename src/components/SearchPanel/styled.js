import styled from "styled-components";
import COLOR from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
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
  width: 100%;
  height: 100%;

  border-radius: 10px;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.BLUE_MARGERITE};
  padding: 5px;
`;

export const ResultBox = styled.div`
  margin-top: 20px;
`;
