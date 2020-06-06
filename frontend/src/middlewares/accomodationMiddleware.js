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
          console.log(response.data);
          store.dispatch(resetMessage());
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
        url: `${process.env.REACT_APP_BACKEND_URL}/user/${action.id}`,
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
          store.dispatch(fetchOwnerInfo(response.data.user));
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
          console.log(response.data);
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
          console.log(response.data);
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
          console.log(response.data);
          store.dispatch(resetMessage());
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
