
import {
  SAVE_SERVICES,
  SAVE_EXTRAS,
  CHANGE_CONTACT_OWNER_PANEL_FIELDS,
  SAVE_ACCOMODATION,
  RESET_MESSAGE,
  CHANGE_DATE,
  FETCH_ACCOMODATION,
  SAVE_OWNER_INFO,
} from '../actions/accomodation';

const initialState = {
  id: -1,
  currentAccomodation: {},
  dateFrom: '',
  dateTo: '',
  dateToFormated: '',
  dateFromFormated: '',
  userMessage: '',
  userMessageObject: '',
  owner: {},
  isLoading: true,
  services: [],
  extras: [],
};

const accomodationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_MESSAGE:
      return {
        ...state,
        userMessage: '',
        userMessageObject: '',
      };
    case FETCH_ACCOMODATION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_ACCOMODATION:
      return {
        ...state,
        currentAccomodation: action.data,
        id: action.data.id,
        isLoading: false,
      };
    case SAVE_SERVICES:
      return {
        ...state,
        services: action.services,
      };
    case SAVE_EXTRAS:
      return {
        ...state,
        extras: action.extras,
      };
    case CHANGE_CONTACT_OWNER_PANEL_FIELDS:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case CHANGE_DATE: {
      console.log(action);
      return {
        ...state,
        [action.identifier]: action.date,
        [`${action.identifier}Formated`]: action.formatedDate,
      };
    }
    case SAVE_OWNER_INFO:
      return {
        ...state,
        owner: action.data,
      };
    default: return state;
  }
};

export default accomodationReducer;
