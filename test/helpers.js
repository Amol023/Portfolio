import React from "react";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { mount as _mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ThemeProvider } from "emotion-theming";
import theme from "../src/themes";

const getTestComponent = ({ component, mount = true }) => {
  const createComponent = mount ? _mount : shallow;
  return toJson(
    createComponent(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
  );
};

export { getTestComponent };
