import React from 'react';
import styled from 'react-emotion';
import { about } from '../../utils/constants';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const BodyStyle = styled('div')`
  background: ${({ theme: { colors } }) => colors.grey.superLight};
  width: 100%;
  text-align: center;
`;

const Body = () => (
  <BodyStyle>
    <Text text={about} size="2em" align="center" fontWeight="bold" />
  </BodyStyle>
);

export default Body;
