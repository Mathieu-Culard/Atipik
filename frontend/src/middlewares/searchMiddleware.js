import axios from 'axios';
import {
  SEARCH,
  saveSearchResult,
  FETCH_ACCOMODATION_TYPES,
  saveAccomodationTypes,
} from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH: {
      const {
        minSurface,
        pipedWater,
        electricity,
        animals,
        smockers,
        apmr,
        city,
        types,
        nbNights,
        country,
        maxPrice,
        capacity,
      } = store.getState().search;
      axios({
        method: 'post',
        url: '../search',
        data: {
          capacity,
          types,
          nbNights,
          city,
          country,
          maxPrice,
          minSurface,
          pipedWater,
          electricity,
          animals,
          smockers,
          apmr,
        },
      }).then((response) => {
        store.dispatch(saveSearchResult(response.data));
      }).catch((error) => {
        console.warn(error);
      });
      next(action);
      break;
    }


    case FETCH_ACCOMODATION_TYPES:
      axios.get('.../types')
        .then((response) => {
          store.dispatch(saveAccomodationTypes(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default searchMiddleware;
