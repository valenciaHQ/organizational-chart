import styled from "styled-components";
import COLOR from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 40px 0 20px 40px;
  background-color: ${COLOR.LINK_WATER};
`;

export const Employees = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Title = styled.h4`
  width: 200px;
`;
