import React, { Component } from "react";
import { ThemeProvider } from "emotion-theming";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import styled, { css } from "react-emotion";
import theme from "./themes";

export const BioContainer = styled("div")`
  ${css({ flexDirection: "row", justifyContent: "space-between" })};
  height: 100vh;
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
