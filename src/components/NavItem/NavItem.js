import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const StyledNavItem = styled('li')`
  padding: 0 20px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
  border-radius: 1px;
`;

const NavItem = ({ name }) => (
  <StyledNavItem>
    <Text text={name} linkTo={`/${name.toLowerCase()}`} font="Lora" />
  </StyledNavItem>
);

NavItem.propTypes = {
  name: PropTypes.string
};

NavItem.defaultProps = {
  name: ''
};

export default NavItem;
