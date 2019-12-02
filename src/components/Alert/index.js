import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "../../constants/colors";

const Wrapper = styled.div`
  position: fixed;
  align-items: center;
  background-color: ${COLOR.YELLOW};
  color: ${COLOR.BLACK};
  border-radius: 25px;
  bottom: 20px;
  display: flex;
  min-height: 50px;
  max-height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  visibility: visible;
  opacity: 1;

  ${({ hide }) =>
    hide &&
    css`
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 0.33s, opacity 0.33s linear;
    `}
`;

const Text = styled.p`
  padding: 5px;
  font-size: 12px;
`;

export default ({ message }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => setHide(true), 2000);
  }, []);

  return (
    <Wrapper hide={hide}>
      <Text>{message}</Text>
    </Wrapper>
  );
};
