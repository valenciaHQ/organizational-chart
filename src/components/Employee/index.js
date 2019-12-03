import React from "react";
import {
  Container,
  Row,
  PhotoWrapper,
  Photo,
  Information,
  Entry,
  RightArrowWrapper
} from "./styled";

export default ({ data, rightArrow, downArrow }) => {
  const { first, last, department, office } = data;
  return (
    <Container>
      <Row height={"85px"}>
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
        {rightArrow && <RightArrowWrapper>{rightArrow}</RightArrowWrapper>}
      </Row>
      {downArrow && <Row centered>{downArrow}</Row>}
    </Container>
  );
};
