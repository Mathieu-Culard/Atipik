import axios from 'axios';
import { openSuccessSnackbar } from 'src/actions/utils';
import {
  SUBMIT_USER_MODIFICATION,
  saveUserInfos,
  DELETE_ACCOUNT,
  FETCH_USER_INFOS,
  SAVE_USER_INFOS,
} from '../actions/user';
import { logOut, setLogged } from '../actions/connection';
import { fetchMyAccomodations } from '../actions/manageAccomodation';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER_MODIFICATION: {
      const {
        firstname,
        lastname,
        pseudo,
        password,
        confirmPassword,
        avatar,
      } = store.getState().user;
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('firstname', firstname);
      formData.append('lastname', lastname);
      formData.append('pseudo', pseudo);
      if (password !== '' && password === confirmPassword) {
        formData.append('password', password);
      }
      axios.post(`${process.env.REACT_APP_API_URL}/account/edit`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          store.dispatch(openSuccessSnackbar('Vos informations ont été modifiées avec succès', 'success'));
        });
      next(action);
      break;
    }

    case SAVE_USER_INFOS: {
      next(action);
      action.data.accomodations.forEach((id) => {
        store.dispatch(fetchMyAccomodations(id));
      });
      break;
    }

    case FETCH_USER_INFOS: {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/account`,
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          store.dispatch(saveUserInfos(response.data));
          store.dispatch(setLogged());
        })
        .catch(() => {
          store.dispatch(logOut());
        });
      next(action);
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
          store.dispatch(openSuccessSnackbar('Votre compte a bien été supprimé', 'success'));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
