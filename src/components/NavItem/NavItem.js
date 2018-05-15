import React from 'react';
import styled from 'react-emotion';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const StyledNavItem = styled('li')``;

const NavItem = ({ name, id }) => (
  <StyledNavItem>
    <Text text={name} />
  </StyledNavItem>
);

export default NavItem;
