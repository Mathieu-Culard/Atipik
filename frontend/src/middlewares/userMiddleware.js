import axios from 'axios';
import { SUBMIT_USER_MODIFICATION, saveUserInfos, DELETE_ACCOUNT } from '../actions/user';
import { LOGIN_CHANGED, logOut } from '../actions/connection';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER_MODIFICATION: {
      const {
        firstname,
        lastname,
        pseudo,
        password,
        confirmPassword,
      } = store.getState().user;
      const data = { firstname, lastname, pseudo };
      if (password !== '' && password === confirmPassword) {
        data.password = password;
      }
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/account/edit`,
        data,
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then(() => {
          // TODO Display confirm message
          console.log('modification du compte ok');
        });
      next(action);
      break;
    }

    case LOGIN_CHANGED: {
      next(action);
      if (store.getState().connection.isLogged) {
        axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/account`,
          headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
          .then((response) => {
            store.dispatch(saveUserInfos(response.data));
          });
      }
      break;
    }

    case DELETE_ACCOUNT: {
      axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/account/delete`,
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then(() => {
          store.dispatch(logOut());
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
