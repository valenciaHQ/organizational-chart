import styled, { css } from "styled-components";
import COLOR from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  border-radius: 20px;
  background-color: ${COLOR.WHITE};
  margin: 20px 0 20px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.height};
  justify-content: ${props => props.centered && "center"};
`;

export const RightArrowWrapper = styled.div`
  align-self: center;
  margin-right: 5px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  margin: 12.5px 25px 12.5px 10px;
  border-radius: 50%;
  src: ${props => props.src};
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`;

export const Entry = styled.div`
  flex-direction: column;
  height: 40px;
  padding: 10px;
  font-size: 12px;

  ${({ isName }) =>
    isName &&
    css`
      padding-top: 20px;
      font-size: 18px;
    `}

  ${({ isInfo }) =>
    isInfo &&
    css`
      padding-top: 0px;
      font-size: 10px;
    `}
`;
