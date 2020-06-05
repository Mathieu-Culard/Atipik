
import {
  SAVE_SERVICES,
  SAVE_EXTRAS,
  CHANGE_CONTACT_OWNER_PANEL_FIELDS,
  SAVE_ACCOMODATION,
  RESET_MESSAGE,
  CHANGE_DATE,
} from '../actions/accomodation';

const initialState = {
  id: -1,
  currentAccomodation: [],
  dateFrom: null,
  dateTo: null,
  dateToFormated: '',
  dateFromFormated: '',
  userMessage: '',
  userMessageObject: '',
  owner: [],
  services: [
    // {
    //   id: 0,
    //   name: 'service0',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 1,
    //   name: 'service1',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 2,
    //   name: 'service2',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 3,
    //   name: 'service3',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 4,
    //   name: 'service4',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 5,
    //   name: 'service5',
    //   icon: 'RY2Kef5s.png',
    // },
  ],
  extras: [
    // {
    //   id: 0,
    //   name: 'extra0',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 1,
    //   name: 'extra1',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 2,
    //   name: 'extra2',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 3,
    //   name: 'extra3',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 4,
    //   name: 'extra4',
    //   icon: 'RY2Kef5s.png',
    // },
    // {
    //   id: 5,
    //   name: 'extra5',
    //   icon: 'RY2Kef5s.png',
    // },
  ],
};

const accomodationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_MESSAGE:
      return {
        ...state,
        userMessage: '',
        userMessageObject: '',
      };
    case SAVE_ACCOMODATION:
      return {
        ...state,
        currentAccomodation: action.data,
        id: action.data.id,
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
    default: return state;
  }
};

export default accomodationReducer;
