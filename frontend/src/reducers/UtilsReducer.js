import { TOGGLE_OPEN } from 'src/actions/UtilsActions';

const initialState = {
  open: false,
};

const UtilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default: return state;
  }
};

export default UtilsReducer;
