import React from "react";
import styled from "react-emotion";

const StyledFooter = styled("div")`
  background: ${({ theme: { colors }}) => colors.grey.faded};
  width: 100%;
  height: 5%;
  text-align: center;
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
