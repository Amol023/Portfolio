import React from "react";
import styled from "react-emotion";
//  COMPONENT IMPORTS
import Text from "../Atoms/Text";

const StyledNamePlate = styled("section")`
  border: 2px solid ${({ theme: { colors } }) => colors.grey.disabled};
  height: 100px;
  width: 100px;
  margin: 2%;
`;

const NamePlate = () => (
  <StyledNamePlate>
    <Text text={"AJ"} />
  </StyledNamePlate>
);

export default NamePlate;