import React from 'react'
import renderer from 'react-test-renderer';
import { App } from '../src/index'

jest.mock('react-dom')

test('should render valid JSX (snapshot)', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
