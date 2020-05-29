import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions } from 'src/actions/map';


const mapStateToProps = (state) => ({
  // accomodations: state.search.searchResult,
  mapCenter: `${state.search.city} ${state.search.country}`,
  loading: state.map.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMarkerPositions: (adress, identifier) => {
    dispatch(fetchMarkerPositions(adress, identifier));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
