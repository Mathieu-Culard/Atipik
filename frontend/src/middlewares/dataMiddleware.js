import axios from 'axios';

import { FETCH_ACCOMODATION_TYPES, saveAccomodationTypes } from '../actions/data';

const dataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACCOMODATION_TYPES:
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/types`)
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

export default dataMiddleware;
