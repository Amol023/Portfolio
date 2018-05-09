import React from "react";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import App from "./App";
import { getTestComponent } from "../test/helpers";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("<App />", () => {
  it("renders without crashing", () => {
    const component = <App />;
    expect(getTestComponent({ component, mount: true })).toMatchSnapshot();
  });
});
