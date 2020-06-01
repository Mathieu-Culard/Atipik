import {
  SAVE_MARKER_POSITIONS,
  FETCH_MARKER_POSITIONS,
} from 'src/actions/map';

const initialState = {
  markerPositions: [],
  center: { lat: 0, lng: 0 },
  loading: true,
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MARKER_POSITIONS:
      return {
        ...state,
        loading: true,
      };
    case SAVE_MARKER_POSITIONS: {
      const { lat, lng } = action.data;
      const { identifier } = action;
      const newValue = identifier === 'center' ? { lat, lng } : [...state.markerPositions, { lat, lng }];
      return {
        ...state,
        [identifier]: newValue,
        loading: false,
      };
    }
    default: return state;
  }
};

export default mapReducer;
