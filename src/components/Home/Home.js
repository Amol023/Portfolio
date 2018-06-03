import React from 'react';
import styled, { css } from 'react-emotion';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

export const HomeContainer = styled('div')`
  ${css({ flexDirection: 'row', justifyContent: 'space-between' })};
  height: 100vh;
  border-radius: 2px;
`;

const Home = () => (
  <HomeContainer>
    <Header />
    <Body />
    <Footer />
  </HomeContainer>
);

export default Home;
