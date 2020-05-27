import { TOGGLE_OPEN } from 'src/actions/utils';

const initialState = {
  open: true,
};

const utilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    default: return state;
  }
};

export default utilsReducer;
