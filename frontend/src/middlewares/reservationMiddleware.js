// import axios from 'axios';

const reservationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case FETCH_RESERVATIONS: {
    //   axios.get(`${process.env.REACT_APP_API_URL}/reservations`);
    // }
    //   break;

    default: next(action);
  }
};

export default reservationMiddleware;
