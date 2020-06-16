export const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
export const SAVE_RESERVATIONS = 'SAVE_RESERVATIONS';
export const RESERVE_ACCOMODATION = 'RESERVE_ACCOMODATION';
export const CLEAR_RESERVATIONS = 'CLEAR_RESERVATIONS';

export const fetchReservations = () => ({ type: FETCH_RESERVATIONS });

export const saveReservations = (reservations) => ({
  type: SAVE_RESERVATIONS,
  reservations,
});

export const reserveAccomodation = (accomodationId) => ({
  type: RESERVE_ACCOMODATION,
  accomodationId,
});

export const clearReservations = () => ({ type: CLEAR_RESERVATIONS });
