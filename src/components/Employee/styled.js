import styled, { css } from "styled-components";
import COLOR from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 300px;
  background-color: ${COLOR.WHITE};
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
      font-size: 26px;
    `}

  ${({ isInfo }) =>
    isInfo &&
    css`
      padding-top: 0px;
      font-size: 14px;
    `}
`;
