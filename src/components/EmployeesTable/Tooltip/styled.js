import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 330px;
  top: 200px;
  padding: 10px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0.4);
`;

export const Greet = styled.div`
  font-size: 13px;
`;
export const Text = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;

export const Dismiss = styled.div`
  position: relative;
  left: 150px;
  margin-top: 8px;
  width: 60px;
  font-size: 12px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
