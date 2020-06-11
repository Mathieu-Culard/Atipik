import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions, resetMarkerPositions } from 'src/actions/map';
import { setBreadcrumbs } from 'src/actions/utils';
import { clearFilters } from 'src/actions/search';


const mapStateToProps = (state) => ({
  accomodations: state.search.searchResult,
  typeList: state.data.accomodationTypes,
  mapCenter: `${state.map.city} ${state.map.country}`,
  loading: state.map.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMarkerPositions: (adress, identifier, accomodation, typeList) => {
    dispatch(fetchMarkerPositions(adress, identifier, accomodation, typeList));
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
