import { LOG_IN, loginChanged, LOG_OUT } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
      // TODO Login request
      console.log(`Sending login request to ${process.env.REACT_APP_API_URL} with email: ${email} password: ${password}`);
      // on success :
      // localStorage.setItem('jwt', response.jwt);
      // store.dispatch(loginChanged());
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
