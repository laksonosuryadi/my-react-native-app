import { FETCH_PHOTO_SUCCESS, FETCH_DATA_SUCCESS } from '../actions/constants'
const initialState = {
  photos: [],
  user: {}
};

const photoReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTO_SUCCESS: return {...state, photos: action.payload};
    case FETCH_DATA_SUCCESS: return {...state, user: action.payload};
    default: return state;
  }
}

export default photoReducer;
