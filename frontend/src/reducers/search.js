import {
  CHANGE_CITY_TEXTFIELD,
  CHANGE_COUNTRY_TEXTFIELD,
  CHANGE_NB_PERSON,
  CHANGE_NB_NIGHTS,
  CHANGE_PRICE_SCALE,
  CHANGE_ACCOMODATION_TYPES,
} from 'src/actions/search';

import { getCheckedAccomodationTypes } from 'src/utils';

const initialState = {
  city: '',
  country: '',
  nbPerson: 0,
  nbNights: 0,
  priceScale: 1,
  accomodationTypes: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CITY_TEXTFIELD:
      return {
        ...state,
        city: action.value,
      };
    case CHANGE_COUNTRY_TEXTFIELD:
      return {
        ...state,
        country: action.value,
      };
    case CHANGE_NB_NIGHTS:
      return {
        ...state,
        nbNights: action.value,
      };
    case CHANGE_NB_PERSON:
      return {
        ...state,
        nbPerson: action.value,
      };
    case CHANGE_PRICE_SCALE:
      return {
        ...state,
        priceScale: action.value,
      };
    case CHANGE_ACCOMODATION_TYPES:
      return {
        ...state,
        accomodationTypes: getCheckedAccomodationTypes(state.accomodationTypes, action.value, action.checked),
      };
    default: return state;
  }
};


export default searchReducer;
