import { combineReducers } from 'redux';

import photoReducer from './photoReducer';

const rootReducer = combineReducers({
  data: photoReducer,
});

export default rootReducer;
