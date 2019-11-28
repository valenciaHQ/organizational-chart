import React from "react";
import { Container, PhotoWrapper, Photo, Information, Entry } from "./styled";

import styled from "styled-components";
const NextWrapper = styled.div`
  align-self: center;
  margin-right: 5px;
`;

export default props => {
  const { first, last, department, office } = props.data;
  return (
    <Container>
      <PhotoWrapper>
        <Photo src="https://via.placeholder.com/75x75.png" />
      </PhotoWrapper>
      <Information>
        <Entry isName>
          {first} {last}
        </Entry>
        <Entry isInfo>
          Department {department} Office {office}
        </Entry>
      </Information>
      {props.subComponent && <NextWrapper>{props.subComponent}</NextWrapper>}
    </Container>
  );
};
