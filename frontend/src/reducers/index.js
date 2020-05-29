import { combineReducers } from 'redux';

import search from './search';
import utils from './utilsReducer';
import user from './userReducer';
import map from './map';

const rootReducer = combineReducers({
  search,
  utils,
  user,
  map,
});

export default rootReducer;
