import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import PhotoItem from '../components/PhotoItem'

it('render PhotoItem successfully', () => {
  const tree = renderer.create(
      <PhotoItem
        navigation={{
          navigate: function() {}
        }}
        photo={{
          image_url: ''
        }}
      />
  )
  expect(tree).toMatchSnapshot();
})
