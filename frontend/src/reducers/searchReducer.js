import {
  CHANGE_TEXTFIELD,
  CHANGE_CAPACITY,
  CHANGE_NB_NIGHTS,
  CHANGE_MAX_PRICE,
  CHANGE_ACCOMODATION_TYPES,
  CHANGE_MULTIPLE_ACCOMODATION_TYPES,
  SAVE_SEARCH_RESULT,
  CHANGE_FILTER_SWITCH,
  CHANGE_MIN_SURFACE,
  CLEAR_FILTERS,
} from 'src/actions/search';

import { getCheckedAccomodationTypes } from 'src/utils';

const initialState = {
  accomodationTypes: [],
  city: '',
  country: '',
  capacity: 0,
  nbNights: 0,
  maxPrice: 0,
  types: [],
  minSurface: 0,
  pipedWater: false,
  electricity: false,
  animals: false,
  smokers: false,
  apmr: false,
  searchResult: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MIN_SURFACE:
      return {
        ...state,
        minSurface: action.value,
      };

    case CHANGE_FILTER_SWITCH:
      return {
        ...state,
        [action.identifier]: !state[action.identifier],
      };

    case CHANGE_TEXTFIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case CHANGE_NB_NIGHTS:
      return {
        ...state,
        nbNights: action.value,
      };

    case CHANGE_CAPACITY:
      return {
        ...state,
        capacity: action.value,
      };

    case CHANGE_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.value,
      };

    case CHANGE_ACCOMODATION_TYPES:
      return {
        ...state,
        types: getCheckedAccomodationTypes(state.types, action.value, action.checked),
      };

    case CHANGE_MULTIPLE_ACCOMODATION_TYPES: {
      let newTypes = [...state.types];
      for (let i = 0; i < action.value.length; i += 1) {
        newTypes = getCheckedAccomodationTypes(newTypes, action.value[i], action.checked);
      }
      return {
        ...state,
        types: newTypes,
      };
    }

    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        // city: '',
        // country: '',
        searchResult: action.searchResult,
        // capacity: 0,
        // nbNights: 0,
        // maxPrice: 0,
        // types: [],
        // minSurface: 0,
        // pipedWater: true,
        // electricity: true,
        // animals: true,
        // smokers: true,
        // apmr: true,
      };

    case CLEAR_FILTERS:
      return {
        ...initialState,
      };

    default: return state;
  }
};


export default searchReducer;
