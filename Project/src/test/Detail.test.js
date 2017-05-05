import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import Detail from '../components/Detail'

it('render Detail successfully', () => {
  const tree = renderer.create(
      <Detail
        navigation={{
          state: {
            params:
            {
              detail:
              {
                user:
                {
                  userpic_url: ''
                },
                image_url: '',
                votes_count: 0,
                times_viewed: 0,
                camera: '',
                iso: '',
                focal_length: 0,
                aperture: 0,
                shutter_speed: 0
              }
            }
          }
        }}
      />
  )
  expect(tree).toMatchSnapshot();
})
