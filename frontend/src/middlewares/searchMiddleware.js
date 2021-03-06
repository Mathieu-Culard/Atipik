import axios from 'axios';
import { createDataForSearch } from 'src/utils';
import {
  SEARCH,
  search,
  saveSearchResult,
  changeMultipleAccomodationTypes,
  CHANGE_FILTER_SWITCH,
  CHANGE_CAPACITY,
  CHANGE_NB_NIGHTS,
  CHANGE_ACCOMODATION_TYPES,
  CHANGE_MULTIPLE_ACCOMODATION_TYPES,
  COMMIT_MIN_SURFACE_CHANGE,
  COMMIT_MAX_PRICE_CHANGE,
  SELECT_ALL,
} from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_FILTER_SWITCH:
    case CHANGE_CAPACITY:
    case COMMIT_MAX_PRICE_CHANGE:
    case CHANGE_NB_NIGHTS:
    case CHANGE_ACCOMODATION_TYPES:
    case CHANGE_MULTIPLE_ACCOMODATION_TYPES:
    case COMMIT_MIN_SURFACE_CHANGE: {
      next(action);
      store.dispatch(search());
      break;
    }
    case SELECT_ALL: {
      const thematic = store.getState().data.accomodationTypes.find((t) => t.id === action.id);
      const typesToAdd = thematic.types.map((t) => t.id);
      store.dispatch(changeMultipleAccomodationTypes(typesToAdd, true, action.id));
      next(action);
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
