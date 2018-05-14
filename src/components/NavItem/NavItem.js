import React from "react";
import styled from "react-emotion";

const StyledNavItem = styled("li")``;

const StyledNavCta = styled("p")``;

const NavItem = ({ name, id }) => (
  <StyledNavItem>
    <StyledNavCta>{name}</StyledNavCta>
  </StyledNavItem>
);

export default NavItem;
