import Geocode from 'react-geocode';
import {
  FETCH_MARKER_POSITIONS,
  saveMarkerPositions,
} from '../actions/map';

const mapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MARKER_POSITIONS: {
      const { adress, identifier } = action;
      Geocode.fromAddress(adress)
        .then(
          (response) => {
            store.dispatch(saveMarkerPositions(response.results[0].geometry.location, identifier));
          },
          (error) => {
            console.error(error);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default mapMiddleware;
