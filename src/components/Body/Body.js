import React from 'react';
import styled from 'react-emotion';
import { about } from '../../utils/constants';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const TransitionContainer = styled('div')`
  background: linear-gradient(158deg, #aaffa9, #11ffbd 61.71%);
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;
const StyledBody = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
  left: 0;
  background: linear-gradient(20deg, #11ffbd, #aaffa9 61.71%);
  opacity: 0;
  transition: opacity 1s linear;
  &:hover {
    opacity: 1;
  }
`;
const StyledText = styled(Text)`
  margin: auto;
`;

const Body = () => (
  <TransitionContainer>
    <StyledBody />
    <StyledText
      text={about}
      size="2em"
      align="center"
      fontWeight="bold"
      font="Lora"
    />
  </TransitionContainer>
);

export default Body;
