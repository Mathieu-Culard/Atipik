import Geocode from 'react-geocode';
import {
  FETCH_MARKER_POSITIONS,
  saveMarkerPositions,
  saveCenterPosition,
  fetchMarkerPositions,
} from '../actions/map';

const mapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MARKER_POSITIONS: {
      next(action);
      const { adress, identifier } = action;
      let location = adress;
      let zoom = 13;
      if (identifier === 'center' && adress.trim() === '') {
        location = 'France';
        zoom = 6.2;
      }
      Geocode.setApiKey(localStorage.getItem('apiKey'));
      Geocode.fromAddress(location)
        .then((response) => {
          if (identifier === 'center') {
            store.dispatch(saveCenterPosition(response.results[0].geometry.location, zoom));
          }
          else {
            store.dispatch(saveMarkerPositions(response.results[0].geometry.location, action.accomodation, action.typeList));
          }
        })
        .catch(() => {
          if (identifier === 'center') {
            store.dispatch(fetchMarkerPositions('', 'center'));
          }
        });
      break;
    }
    default:
      next(action);
  }
};

export default mapMiddleware;
