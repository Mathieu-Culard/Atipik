import { LOG_IN, loginChanged, LOG_OUT } from 'src/actions/user';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
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

    case LOG_OUT: {
      localStorage.removeItem('jwt');
      store.dispatch(loginChanged());
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
