import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const StyledText = styled('p')`
  font-family: ${({ font }) => font};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledLink = styled(Link)`
  color: inherit;
  background-color: inherit;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Text = ({
  align,
  backgroundColor,
  color,
  font,
  fontWeight,
  link,
  linkTo,
  size,
  styles,
  text,
  ...rest
}) => (
  <StyledText
    {...{
      align,
      backgroundColor,
      color,
      font,
      fontWeight,
      link,
      size,
      styles,
      ...rest
    }}>
    {linkTo ? <StyledLink to={linkTo}>{text}</StyledLink> : text}
  </StyledText>
);

Text.propTypes = {
  align: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.string,
  link: PropTypes.string,
  linkTo: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  text: PropTypes.string.isRequired
};

Text.defaultProps = {
  align: '',
  backgroundColor: '',
  color: '',
  font: '',
  fontWeight: '',
  link: '',
  linkTo: '',
  size: '',
  styles: ''
};

export default Text;
