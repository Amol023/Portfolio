import React from "react";
import styled, { css } from "react-emotion";
//  HELPER IMPORTS
import { links } from "../../utils/constants";
//  COMPONENT IMPORTS
import NavItem from "../NavItem";

const StyledNavMenu = styled("ul")`
  list-style-type: none;
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NavMenu = () => (
  <StyledNavMenu>
    {links.map(link => {
      return <NavItem {...link} key={link.id} />;
    })}
  </StyledNavMenu>
);

export default NavMenu;
