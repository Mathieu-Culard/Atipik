import axios from 'axios';

import {
  SEND_MESSAGE_TO_ADMIN,
  resetContactMessage,
  RESET_PASSWORD,
} from 'src/actions/contact';

import { openSuccessSnackbar, setErrorMessage, closeModal } from 'src/actions/utils';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE_TO_ADMIN: {
      const { object, message, email } = store.getState().contact;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/contact`,
        data: {
          object,
          message,
          email,
        },
      }).then(() => {
        store.dispatch(resetContactMessage());
        store.dispatch(openSuccessSnackbar('Votre message a bien été envoyé', 'success'));
        store.dispatch(closeModal());
      }).catch(() => {
        store.dispatch(setErrorMessage('Erreur lors de l\'envoi du message'));
      });
      next(action);
      break;
    }

    case RESET_PASSWORD: {
      const { email } = store.getState().contact;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/reset-password`,
        data: {
          email,
        },
      }).then(() => {
        store.dispatch(resetContactMessage());
        store.dispatch(openSuccessSnackbar('Un email vous a été envoyé avec votre nouveau mot de passe', 'success'));
      }).catch(() => {
        store.dispatch(setErrorMessage('Impossible de trouver l\'email fourni, veuillez réessayer'));
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default contactMiddleware;
