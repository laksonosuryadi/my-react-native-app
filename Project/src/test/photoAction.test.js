import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'

import { fetchPhoto } from '../actions';
import { FETCH_PHOTO_SUCCESS } from '../actions/constants';

const mockStore = configureMockStore([thunk]);

describe('photo actions', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('fetching photo success', () => {
    const store = mockStore();
    fetchMock.get('https://api.500px.com/v1/photos?feature=popular&page=1&image_size=600&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF', {photos: ['nikmat']});
    return store.dispatch(fetchPhoto())
    .then(() => {
      expect(store.getActions()).toEqual([
        {
          payload: ['nikmat'],
          type: FETCH_PHOTO_SUCCESS
        }
      ])
    })
  })
})
