import React from 'react';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import Header from './Header';
import { getTestComponent } from '../../../test/helpers';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('<Header />', () => {
  it('renders without crashing', () => {
    const component = <Header />;
    expect(getTestComponent({ component, mount: true })).toMatchSnapshot();
  });
});
