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
import { getTypeById } from 'src/utils';

const initialState = {
  markerPositions: [],
  center: { lat: 0, lng: 0 },
  loading: true,
  city: '',
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
      const {
        title, city, country, type, pictures, id,
      } = action.accomodation;
      return {
        ...state,
        markerPositions: [...state.markerPositions, {
          lat,
          lng,
          title,
          city,
          country,
          pictures,
          id,
          type: getTypeById(action.typeList, type),
          // type:  action.typeList.map((thematic) => thematic.types.filter((accomodationType) => accomodationType.id === type)),
        }],
      };
    }
    case CHANGE_TEXTFIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SAVE_CENTER_POSITION: {
      const { lat, lng } = action.data;

      return {
        ...state,
        center: { lat, lng },
        zoom: action.zoom,
        loading: false,
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
        city: '',
        country: '',
      };
    default: return state;
  }
};

export default mapReducer;
