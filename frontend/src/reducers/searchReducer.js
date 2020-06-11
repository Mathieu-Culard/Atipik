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
  UNSELECT_ALL,
} from 'src/actions/search';

import { getCheckedAccomodationTypes, unselectAccomodationTypesByThematic, checkThematicSelected } from 'src/utils';


const initialState = {
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
  selectedThematics: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UNSELECT_ALL:
      return {
        ...state,
        types: unselectAccomodationTypesByThematic(action.id, state.types, action.types),
        selectedThematics: state.selectedThematics.filter((thematic) => (thematic !== action.id)),
      };
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

    case CHANGE_ACCOMODATION_TYPES: {
      const selectedTypes = getCheckedAccomodationTypes(state.types, action.value, action.checked);
      return {
        ...state,
        types: selectedTypes,
        selectedThematics: checkThematicSelected(action.typeList, selectedTypes),
      };
    }
    case CHANGE_MULTIPLE_ACCOMODATION_TYPES: {
      let newTypes = [...state.types];
      for (let i = 0; i < action.value.length; i += 1) {
        newTypes = getCheckedAccomodationTypes(newTypes, action.value[i], action.checked);
      }
      return {
        ...state,
        types: newTypes,
        selectedThematics: [...state.selectedThematics, action.thematicId],
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
