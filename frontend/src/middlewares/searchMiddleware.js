import axios from 'axios';
import { SEARCH } from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH: {
      console.log('SEARCH');
      // const {city,types,nbNights,city,country,priceScale,}

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default searchMiddleware;
