import {
  SHOW_LIST,
  SHOW_MAP,
  SHOW_FILTER,
  SHOW_ALL,
} from 'src/actions/responsive';

const initialState = {
  list: true,
  filter: true,
  map: true,
};

const responsiveReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LIST:
      return {
        list: true,
        map: false,
        filter: false,
      };
    case SHOW_MAP:
      return {
        list: false,
        map: true,
        filter: false,
      };
    case SHOW_FILTER:
      return {
        list: false,
        map: false,
        filter: true,
      };
    case SHOW_ALL:
      return {
        list: true,
        map: true,
        filter: true,
        buttons: false,
      };
    default: return state;
  }
};

export default responsiveReducer;
