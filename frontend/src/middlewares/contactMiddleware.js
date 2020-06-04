import axios from 'axios';
import PropTypes from 'prop-types';

import { SEND_MESSAGE_TO_ADMIN, resetContactMessage } from 'src/actions/contact';

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
    default:
      next(action);
  }
};

export default contactMiddleware;
