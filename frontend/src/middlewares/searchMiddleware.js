import axios from 'axios';
import { createDataForSearch } from 'src/utils';
import {
  SEARCH,
  search,
  saveSearchResult,
  CHANGE_FILTER_SWITCH,
  CHANGE_CAPACITY,
  CHANGE_NB_NIGHTS,
  CHANGE_ACCOMODATION_TYPES,
  CHANGE_MIN_SURFACE,
  CHANGE_MAX_PRICE,
  SELECT_ALL,
} from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_FILTER_SWITCH:
    case CHANGE_CAPACITY:
    case CHANGE_MAX_PRICE:
    case CHANGE_NB_NIGHTS:
    case CHANGE_ACCOMODATION_TYPES:
    case CHANGE_MIN_SURFACE:
    case SELECT_ALL: {
      next(action);
      store.dispatch(search());
      break;
    }
    case SEARCH: {
      const data = createDataForSearch(store.getState().search);
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/search`,
        data,
      }).then((response) => {
        store.dispatch(saveSearchResult(response.data));
      }).catch((error) => {
        console.warn(error);
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default searchMiddleware;
