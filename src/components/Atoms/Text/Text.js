import React from "react";
import Proptypes from "prop-types";
import styled from "react-emotion";

const StyledText = styled("p")`
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
    }}
  >
    {text}
  </StyledText>
);

Text.propTypes = {
  text: Proptypes.string.isRequired
};

Text.defaultProps = {
  text: ""
};

export default Text;
