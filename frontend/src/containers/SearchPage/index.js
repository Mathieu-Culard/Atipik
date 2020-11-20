import { connect } from 'react-redux';
import SearchPage from 'src/pages/SearchPage';

import { fetchMarkerPositions, resetMarkerPositions } from 'src/actions/map';
import { clearFilters } from 'src/actions/search';
import { showAll, showFilter, showMap, showList } from 'src/actions/responsive';

const mapStateToProps = (state) => ({
  accomodations: state.search.searchResult,
  typeList: state.data.accomodationTypes,
  mapCenter: `${state.map.city} ${state.map.country}`,
  loading: state.map.loading,
  displayList: state.responsive.list,
  displayFilter: state.responsive.filter,
  displayMap: state.responsive.map,
});

const mapDispatchToProps = (dispatch) => ({
  showAll: () => dispatch(showAll()),
  showFilter: () => dispatch(showFilter()),
  showMap: () => dispatch(showMap()),
  showList: () => dispatch(showList()),
  fetchMarkerPositions: (adress, identifier, accomodation, typeList) => {
    dispatch(fetchMarkerPositions(adress, identifier, accomodation, typeList));
  },
  resetMarkerPositions: () => {
    dispatch(resetMarkerPositions());
  },
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
