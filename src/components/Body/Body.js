import React from "react";
import styled, { css } from "react-emotion";

const BodyStyle = styled("div")`
  background: ${({ theme: { colors }}) => colors.grey.superLight};
  width: 100%;
  height: 90%;
  text-align: center;
`;

const Body = () => {
  return <BodyStyle />;
};

export default Body;
