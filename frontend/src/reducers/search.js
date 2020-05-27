import {
  CHANGE_TEXTFIELD,
  CHANGE_CAPACITY,
  CHANGE_NB_NIGHTS,
  CHANGE_MAX_PRICE,
  CHANGE_ACCOMODATION_TYPES,
  SELECT_ALL,
  SAVE_SEARCH_RESULT,
  CHANGE_FILTER_SWITCH,
  CHANGE_MIN_SURFACE,
} from 'src/actions/search';

import { getCheckedAccomodationTypes, selectAccomodationTypesByThematic } from 'src/utils';

const initialState = {
  city: '',
  country: '',
  capacity: 0,
  nbNights: 0,
  maxPrice: 100,
  types: [1],
  minSurface: 0,
  pipedWater: true,
  electricity: true,
  animals: true,
  smockers: true,
  apmr: true,
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
    case SELECT_ALL:
      return {
        ...state,
        types: selectAccomodationTypesByThematic(state.types, action.id),
      };
    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.searchResult,
        city: '',
        country: '',
        capacity: 0,
        nbNights: 0,
        maxPrice: 0,
        types: [],
        minSurface: 0,
        pipedWater: true,
        electricity: true,
        animals: true,
        smockers: true,
        apmr: true,
      };
    default: return state;
  }
};


export default searchReducer;
