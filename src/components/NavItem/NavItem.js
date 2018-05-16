import React from 'react';
import styled from 'react-emotion';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const StyledNavItem = styled('li')``;

const NavItem = ({ name }) => (
  <StyledNavItem>
    <Text text={name} font="Lora" />
  </StyledNavItem>
);

export default NavItem;
