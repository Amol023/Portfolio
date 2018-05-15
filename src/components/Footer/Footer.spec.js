import React from 'react';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import Footer from './Footer';
import { getTestComponent } from '../../../test/helpers';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const component = <Footer />;
    expect(getTestComponent({ component, mount: true })).toMatchSnapshot();
  });
});
