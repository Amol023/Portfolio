import React from 'react';
import styled, { css } from 'react-emotion';
//  COMPONENT IMPORTS
import NamePlate from '../Nameplate';
import NavMenu from '../NavMenu';

const StyledHeader = styled('header')`
  width: 92%;
  margin: 4%;
  text-align: center;
  ${css({
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  })};
`;

const Header = () => {
  return (
    <StyledHeader>
      <NamePlate />
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
