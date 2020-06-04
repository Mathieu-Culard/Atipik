import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions, resetMarkerPositions } from 'src/actions/map';
import { setBreadcrumbs } from 'src/actions/utils';
import { clearFilters } from 'src/actions/search';


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
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
