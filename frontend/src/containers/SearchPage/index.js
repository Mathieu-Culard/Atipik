import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions, resetMarkerPositions } from 'src/actions/map';
import { setBreadcrumbs } from 'src/actions/utils';


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
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
