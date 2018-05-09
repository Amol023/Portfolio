import React from "react";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import Body from "./Body";
import { getTestComponent } from "../../../test/helpers";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("<Body />", () => {
  it("renders without crashing", () => {
    const component = <Body />;
    expect(getTestComponent({ component, mount: true })).toMatchSnapshot();
  });
});
