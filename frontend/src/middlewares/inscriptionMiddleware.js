import axios from 'axios';
import { SUBMIT_INSCRIPTION } from '../actions/inscription';
import { closeModal, openSuccessSnackbar, setErrorMessage } from '../actions/utils';

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
      }).then(() => {
        store.dispatch(closeModal());
        store.dispatch(openSuccessSnackbar('Inscription réussie', 'success'));
      }).catch(() => {
        store.dispatch(setErrorMessage('L\'inscription a échoué'));
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default inscriptionMiddleware;
