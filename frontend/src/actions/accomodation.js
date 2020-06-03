export const FETCH_ACCOMODATION = 'FETCH_ACCOMODATION';
export const SAVE_ACCOMODATION = 'SAVE_ACCOMODATION';
export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_EXTRAS = 'FETCH_EXTRAS';
export const SAVE_SERVICES = 'SAVE_SERVICES';
export const SAVE_EXTRAS = 'SAVE_EXTRAS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_CONTACT_OWNER_PANEL_FIELDS = 'CHANGE_CONTACT_OWNER_PANEL_FIELDS';
export const RESET_MESSAGE = 'RESET_MESSAGE';
export const CHANGE_DATE = 'CHANGE_DATE';
export const SEND_RESERVATION = 'SEND_RESERVATION';

export const sendReservation = (dateTo, dateFrom, accomodationId) => ({
  type: SEND_RESERVATION,
  dateTo,
  dateFrom,
  accomodationId,
});

export const changeDate = (identifier, date, formatedDate) => ({
  type: CHANGE_DATE,
  identifier,
  date,
  formatedDate,
});

export const resetMessage = () => ({
  type: RESET_MESSAGE,
});

export const saveAccomodation = (data) => ({
  type: SAVE_ACCOMODATION,
  data,
});

export const changeContactOwnerPanelFields = (identifier, newValue) => ({
  type: CHANGE_CONTACT_OWNER_PANEL_FIELDS,
  identifier,
  newValue,
});

export const sendMessage = (object, message, userId, accomodationId) => ({
  type: SEND_MESSAGE,
  object,
  message,
  userId,
  accomodationId,
});

export const saveServices = (services) => ({
  type: SAVE_SERVICES,
  services,
});

export const saveExtras = (extras) => ({
  type: SAVE_EXTRAS,
  extras,
});

export const fetchServices = () => ({
  type: FETCH_SERVICES,
});

export const fetchExtras = () => ({
  type: FETCH_EXTRAS,
});

export const fetchAccomodation = (id) => ({
  type: FETCH_ACCOMODATION,
  id,
});
