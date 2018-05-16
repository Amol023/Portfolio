import React from 'react';
import styled from 'react-emotion';
import { about } from '../../utils/constants';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const StyledBody = styled('div')`
  background: linear-gradient(158deg, #aaffa9, #11ffbd 61.71%);
  transition: background 2.5s ease;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background: linear-gradient(158deg, #11ffbd, #aaffa9 61.71%);
  }
`;
const StyledText = styled(Text)`
  margin: auto;
`;

const Body = () => (
  <StyledBody>
    <StyledText
      text={about}
      size="2em"
      align="center"
      fontWeight="bold"
      font="Lora"
    />
  </StyledBody>
);

export default Body;
