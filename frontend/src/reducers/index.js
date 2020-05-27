import { combineReducers } from 'redux';

import search from './search';
import UtilsReducer from './UtilsReducer';

const rootReducer = combineReducers({
  search,
  utils: UtilsReducer,
});

export default rootReducer;
