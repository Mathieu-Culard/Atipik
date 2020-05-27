import { combineReducers } from 'redux';
import UtilsReducer from './UtilsReducer';

const rootReducer = combineReducers({
  utils: UtilsReducer,
});

export default rootReducer;
