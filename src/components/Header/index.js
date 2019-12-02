import React from "react";
import styled from "styled-components";

import { Logo } from "../../styled";
import COLOR from "../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: ${COLOR.BLUE_MARGERITE};
  padding: 0 20px 0 20px;
`;

const BrandingWrapper = styled.div`
  font-size: 20px;
`;

const Branding = () => (
  <BrandingWrapper>
    {`Designed by `}
    <a
      href="https://github.com/valenciaHQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      @valenciaHQ
    </a>
  </BrandingWrapper>
);

export default () => (
  <Wrapper>
    <Logo />
    <Branding />
  </Wrapper>
);
