import styled, { css } from "styled-components";
import colors from "../../constants/colors";

export const Employees = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h5`
  width: 100%;
`;

export const NextManager = styled.div`
  position: relative;
  width: 15px;
  top: -65px;
  left: 290px;
`;

export const Icon = styled.div`
  border: solid ${colors.BLUE_MARGERITE};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  &:hover {
    cursor: pointer;
  }
`;
