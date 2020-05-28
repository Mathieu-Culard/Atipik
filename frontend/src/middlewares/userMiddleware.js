import { LOG_IN, LOG_OUT, CHECK_LOGGED, saveUser } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
      // TODO Login request
      console.log(`Sending login request to ${process.env.REACT_APP_API_URL} with email: ${email} password: ${password}`);
      next(action);
      break;
    }

    case CHECK_LOGGED:
      // TODO check-logged request
      next(action);
      break;

    case LOG_OUT:
      // TODO logOut request
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
