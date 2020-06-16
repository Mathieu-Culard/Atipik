import { SAVE_RESERVATIONS, CLEAR_RESERVATIONS, RESERVE_ACCOMODATION } from 'src/actions/reservations';

const initialState = {
  reservations: {
    myReservations: [],
    myAccomodationsReservations: [],
  },
};

const reservationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RESERVATIONS:
      return {
        ...state,
        reservations: action.reservations,
      };

    case CLEAR_RESERVATIONS:
      return {
        ...initialState,
      };

    case RESERVE_ACCOMODATION: {
      const newReservations = {
        myReservations: [...state.reservations.myReservations, action.reservation],
        myAccomodationsReservations: [...state.reservations.myAccomodationsReservations],
      };
      return {
        ...state,
        reservations: newReservations,
      };
    }

    default: return state;
  }
};

export default reservationsReducer;
