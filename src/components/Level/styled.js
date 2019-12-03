import styled from "styled-components";
import colors from "../../constants/colors";

export const Loading = styled.h5`
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  width: 100%;
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

export const Arrow = styled.div`
  border: solid ${colors.BLUE_MARGERITE};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const DownArrow = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;
