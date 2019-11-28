import styled, { css } from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Employees = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  width: 100%;
`;

export const NextManager = styled.div`
  position: relative;
  width: 15px;
  max-width: 15px;
  top: -80px;
  left: 290px;
`;

export const Icon = styled.div`
  border: solid ${colors.BLUE_MARGERITE};
  border-width: 0 3px 3px 0;
  max-width: 5px;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  &:hover {
    cursor: pointer;
  }
`;
