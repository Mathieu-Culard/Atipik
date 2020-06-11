import axios from 'axios';
import {
  SEND_MESSAGE,
  FETCH_ACCOMODATION,
  FETCH_SERVICES,
  FETCH_EXTRAS,
  SEND_RESERVATION,
  FETCH_OWNER_INFO,
  saveServices,
  saveExtras,
  saveAccomodation,
  resetMessage,
  fetchOwnerInfo,
  saveOwnerInfo,
} from 'src/actions/accomodation';
import { openSuccessSnackbar } from 'src/actions/utils';


const accomodationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_RESERVATION: {
      const {
        dateTo,
        dateFrom,
        accomodationId,
      } = action;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/accomodation/${accomodationId}/reservation`,
        data: {
          dateTo,
          dateFrom,
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          store.dispatch(resetMessage());
          store.dispatch(openSuccessSnackbar('Votre réservation a bien été prise en compte'));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    case FETCH_OWNER_INFO:
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/accomodation/${action.id}/owner`,
      })
        .then((response) => {
          store.dispatch(saveOwnerInfo(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    case FETCH_ACCOMODATION:
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/accomodation/${action.id}`,
      })
        .then((response) => {
          store.dispatch(fetchOwnerInfo(action.id));
          store.dispatch(saveAccomodation(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    case FETCH_SERVICES: {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/services`)
        .then((response) => {
          store.dispatch(saveServices(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    case FETCH_EXTRAS: {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/extras`)
        .then((response) => {
          store.dispatch(saveExtras(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    case SEND_MESSAGE: {
      const {
        accomodationId,
        object,
        message,
        userId,
      } = action;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/accomodation/${accomodationId}/contact`,
        data: {
          id: accomodationId,
          object,
          message,
          user: userId,
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          store.dispatch(resetMessage());
          store.dispatch(openSuccessSnackbar('Votre message a été transmis au propriétaire de cet hébergement'));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default accomodationMiddleware;
