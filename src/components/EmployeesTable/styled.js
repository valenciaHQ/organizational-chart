import styled from "styled-components";
import COLOR from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 100%;
  padding: 40px 0 20px 40px;
  background-color: ${COLOR.LINK_WATER};
`;

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  min-width: 300px;
  padding: 10px;
  background-color: yellowgreen;
`;
