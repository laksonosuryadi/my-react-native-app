import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App'

it('render App successfully', () => {
  const tree = renderer.create(
      <App />
  )
  expect(tree).toMatchSnapshot();
})
