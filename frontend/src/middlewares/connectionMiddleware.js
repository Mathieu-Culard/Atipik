import {
  LOG_IN,
  loginChanged,
  LOGIN_CHANGED,
  LOG_OUT,
  REMOVE_TOKEN,
  removeToken,
} from 'src/actions/connection';
import axios from 'axios';
import { push } from 'connected-react-router';

import { fetchUserInfos, clearUserInfos } from 'src/actions/user';
import { resetMyAccomodationInfos } from 'src/actions/manageAccomodation';

const connectionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().connection;
      axios.post(`${process.env.REACT_APP_API_URL}/login_check`, {
        username: email,
        password,
      }).then((response) => {
        localStorage.setItem('jwt', response.data.token);
        store.dispatch(loginChanged());
      });
      next(action);
      break;
    }

    case LOGIN_CHANGED: {
      next(action);
      if (store.getState().connection.isLogged) {
        store.dispatch(fetchUserInfos());
      }
      break;
    }

    case LOG_OUT: {
      store.dispatch(removeToken());
      store.dispatch(clearUserInfos());
      store.dispatch(resetMyAccomodationInfos());
      store.dispatch(loginChanged());
      next(action);
      store.dispatch(push('/'));
      break;
    }

    case REMOVE_TOKEN: {
      localStorage.removeItem('jwt');
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default connectionMiddleware;
