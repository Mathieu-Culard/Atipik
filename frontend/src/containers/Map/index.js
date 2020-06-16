import { connect } from 'react-redux';
import Map from 'src/components/Map';

import { fetchMarkerPositions } from 'src/actions/map';


const mapStateToProps = (state) => ({
  // accomodations: state.search.searchResult,
  centerPosition: state.map.center,
  markerPositions: state.map.markerPositions,
  zoom: state.map.zoom,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMarkerPositions: (adress, identifier) => {
    dispatch(fetchMarkerPositions(adress, identifier));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
