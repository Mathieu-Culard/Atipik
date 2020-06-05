import {
  SAVE_MARKER_POSITIONS,
  FETCH_MARKER_POSITIONS,
  SAVE_CENTER_POSITION,
  RESET_MARKER_POSITIONS,
} from 'src/actions/map';
import {
  CHANGE_TEXTFIELD,
  CLEAR_FILTERS,
} from 'src/actions/search';


const initialState = {
  markerPositions: [],
  center: { lat: 0, lng: 0 },
  loading: true,
  city: 'Océan Atlantique',
  country: '',
  zoom: 13,

};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MARKER_POSITIONS:
      return {
        ...state,
        loading: action.identifier === 'center',
      };
    case SAVE_MARKER_POSITIONS: {
      const { lat, lng } = action.data;
      return {
        ...state,
        markerPositions: [...state.markerPositions, { lat, lng }],
      };
    }
    case CHANGE_TEXTFIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SAVE_CENTER_POSITION: {
      const { lat, lng } = action.data;
      let zoom = 13;
      if (state.city === 'Océan Atlantique') {
        zoom = 0;
      }
      return {
        ...state,
        center: { lat, lng },
        loading: false,
        zoom,
      };
    }
    case RESET_MARKER_POSITIONS:
      return {
        ...state,
        markerPositions: [],
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        city: 'Océan Atlantique',
        country: '',
      };
    default: return state;
  }
};

export default mapReducer;
