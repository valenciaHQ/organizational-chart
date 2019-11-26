import React from "react";
import { Container, PhotoWrapper, Photo, Information, Entry } from "./styled";

export default props => {
  console.log(props.data);
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
    </Container>
  );
};
