import { combineReducers } from 'redux';

import search from './search';
import UtilsReducer from './UtilsReducer';
import map from './map';

const rootReducer = combineReducers({
  search,
  utils: UtilsReducer,
  map,
});

export default rootReducer;
