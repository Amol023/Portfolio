import React from "react";
import { css } from "emotion";
import styled from "react-emotion";

const StyledHeader = styled("div")`
  background: ${({ theme: { colors }}) => colors.green.teal};
  width: 100%;
  height: 5%;
  text-align: center;
`;

const Header = () => {
  return <StyledHeader />;
};

export default Header;
