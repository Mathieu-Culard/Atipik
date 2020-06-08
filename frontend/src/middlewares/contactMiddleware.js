import axios from 'axios';

import {
  SEND_MESSAGE_TO_ADMIN,
  resetContactMessage,
  RESET_PASSWORD,
} from 'src/actions/contact';
// import { setLostPasswordPanel } from 'src/actions/utils';

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
      }).catch((error) => {
        console.warn(`${error}`);
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
        store.dispatch(setLostPasswordPanel(false));
        store.dispatch(resetContactMessage());
        // TODO modale de confirmation
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default contactMiddleware;
