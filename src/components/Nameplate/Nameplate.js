import React from 'react';
import styled from 'react-emotion';
//  COMPONENT IMPORTS
import Text from '../Atoms/Text';

const AnimationDiv = styled('div')`
  position: absolute;
  border: 2px solid;
  height: 100px;
  width: 100px;
  border-radius: 1px;
  animation: off 1s ease 1;
  &:hover {
    animation: on 1s ease 1;
    cursor: pointer;
  }
  @keyframes on {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
  @keyframes off {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const Name = styled(Text)`
  margin-left: 5%;
`;

const PlateContainer = styled('div')`
  position: relative;
`;
const NameContainer = styled('div')`
  position: absolute;
  width: 100px;
`;

const NamePlate = () => (
  <PlateContainer>
    <NameContainer>
      <Name
        text="AJ"
        size="2em"
        align="center"
        fontWeight="bold"
        font="Lora"
        linkTo="/"
      />
    </NameContainer>
    <AnimationDiv />
  </PlateContainer>
);

export default NamePlate;
