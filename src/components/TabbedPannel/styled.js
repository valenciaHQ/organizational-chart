import styled, { css } from "styled-components";
import COLOR from "../../constants/colors";

export const Tabbed = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 50px;
  padding-left: 20px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 33px -9px rgba(0, 0, 0, 0.75);
`;

export const Tab = styled.div`
  margin: 10px 10px 5px 10px;
  color: ${COLOR.BLUE_MARGERITE};
  font-size: 20px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${COLOR.BLACK};
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid ${COLOR.BLACK};
    `}

  ${props =>
    !props.active &&
    css`
      color: gray;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${COLOR.LINK_WATER};
`;

export const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow: auto;
  width: 96vw;
  flex-direction: column;
  padding: 40px 20px 20px 40px;
  margin-top: 30px;
  background-color: ${COLOR.LINK_WATER};
`;
