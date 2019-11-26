import styled from "styled-components";
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

export const Entry = styled.div(props => ({
  display: "flex",
  flexDirection: "row",
  height: "40px",
  padding: "10px"
}));
