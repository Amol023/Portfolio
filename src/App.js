import React, { Component } from "react";
import { ThemeProvider } from "emotion-theming";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import styled, { css } from "react-emotion";
import theme from "./themes";

const flexify = props => {
  const {
    flexDirection = "row",
    justifyContent = "flex-start",
    flexFlow,
    alignItems = "flex-start"
  } = props;
  return css({
    flexDirection,
    justifyContent,
    flexFlow,
    alignItems
  });
};

export const BioContainer = styled("div")`
  ${flexify({ flexDirection: "row", justifyContent: "space-between" })};
  height: 100vh;
  border: 2px solid ${({ theme: { colors } }) => colors.grey.charcoal};
  border-radius: 2px;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BioContainer>
          <Header />
          <Body />
          <Footer />
        </BioContainer>
      </ThemeProvider>
    );
  }
}

export default App;
