import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ListPhoto from '../components/ListPhoto'
import store from '../store';

it('render ListPhoto successfully', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ListPhoto photo={{}} navigation={{}}/>
    </Provider>
  )
  expect(tree).toMatchSnapshot();
})
