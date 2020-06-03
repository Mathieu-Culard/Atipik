import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions, resetMarkerPositions } from 'src/actions/map';


const mapStateToProps = (state) => ({
  accomodations: state.search.searchResult,
  mapCenter: `${state.map.city} ${state.map.country}`,
  loading: state.map.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMarkerPositions: (adress, identifier) => {
    dispatch(fetchMarkerPositions(adress, identifier));
  },
  resetMarkerPositions: () => {
    dispatch(resetMarkerPositions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
