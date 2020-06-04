import { SAVE_ACCOMODATION_TYPES } from 'src/actions/data';

const initialState = {
  accomodationTypes: [],
};

const dataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ACCOMODATION_TYPES:
      return {
        ...state,
        accomodationTypes: action.accomodationTypes,
      };

    default:
      return state;
  }
};

export default dataReducer;
