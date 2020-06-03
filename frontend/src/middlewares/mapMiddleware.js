import Geocode from 'react-geocode';
import {
  FETCH_MARKER_POSITIONS,
  saveMarkerPositions,
  saveCenterPosition,
} from '../actions/map';

const mapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MARKER_POSITIONS: {
      next(action);
      const { adress, identifier } = action;
      Geocode.setApiKey(localStorage.getItem('apiKey'));
      Geocode.fromAddress(adress)
        .then(
          (response) => {
            if (identifier === 'center') {
              store.dispatch(saveCenterPosition(response.results[0].geometry.location));
            }
            else {
              store.dispatch(saveMarkerPositions(response.results[0].geometry.location));
            }
          },
          (error) => {
            console.error(error);
          },
        );
     
      break;
    }
    default:
      next(action);
  }
};

export default mapMiddleware;
