import React from 'react';
import Proptypes from 'prop-types';
import styled from 'react-emotion';

const StyledText = styled('p')`
  font-family: ${({ font }) => font};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Text = ({
  text,
  color,
  align,
  backgroundColor,
  font,
  size,
  fontWeight,
  link,
  styles,
  ...rest
}) => (
  <StyledText
    {...{
      color,
      align,
      backgroundColor,
      font,
      size,
      fontWeight,
      link,
      styles,
      ...rest
    }}>
    {text}
  </StyledText>
);

Text.propTypes = {
  text: Proptypes.string.isRequired,
  color: Proptypes.string,
  align: Proptypes.string,
  backgroundColor: Proptypes.string,
  font: Proptypes.string,
  size: Proptypes.number,
  fontWeight: Proptypes.string,
  link: Proptypes.string,
  styles: Proptypes.object
};

Text.defaultProps = {
  color: '',
  align: '',
  backgroundColor: '',
  font: '',
  size: '',
  fontWeight: '',
  link: '',
  styles: ''
};

export default Text;
