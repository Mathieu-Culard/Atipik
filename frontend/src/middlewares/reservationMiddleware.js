import axios from 'axios';

import { FETCH_RESERVATIONS, saveReservations } from 'src/actions/reservations';

const reservationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      axios.get(`${process.env.REACT_APP_API_URL}/reservations`, {
        user: store.getState().user.id,
      })
        .then((response) => {
          store.dispatch(saveReservations(response.data));
        });
      break;

    default: next(action);
  }
};

export default reservationMiddleware;
