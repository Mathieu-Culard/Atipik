import axios from 'axios';
import { SUBMIT_INSCRIPTION } from '../actions/inscription';

const inscriptionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_INSCRIPTION: {
      const {
        firstname,
        lastname,
        email,
        pseudo,
        password,
      } = store.getState().inscription;
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        firstname,
        lastname,
        email,
        password,
        pseudo,
      }).then((response) => {
        console.log('inscription ok');
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default inscriptionMiddleware;
