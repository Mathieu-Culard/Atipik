import { combineReducers } from 'redux';

import search from './searchReducer';
import utils from './utilsReducer';
import user from './userReducer';
import map from './mapReducer';

const rootReducer = combineReducers({
  search,
  utils,
  user,
  map,
});

export default rootReducer;
