import React, { Fragment, Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled, { css } from 'react-emotion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Gallery from '../src/components/Gallery';
import theme from './themes';

export const BioContainer = styled('div')`
  ${css({ flexDirection: 'row', justifyContent: 'space-between' })};
  height: 100vh;
  border-radius: 2px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Route path="/gallery" component={Gallery} />
            <Route path="/" exact component={Home} />
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
