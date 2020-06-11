import { connect } from 'react-redux';
import MyAccomodationsPage from 'src/pages/MyAccomodationsPage';

import { fetchMyAccomodations, deleteMyAccomodation } from 'src/actions/manageAccomodation';
import { setBreadcrumbs } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  myAccomodationIds: state.user.accomodations,
  myAccomodations: state.manageAccomodation.myAccomodations,
  typeList: state.data.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),

  fetchMyAccomodations: (id) => {
    dispatch(fetchMyAccomodations(id));
  },
  deleteMyAccomodation: (id) => {
    dispatch(deleteMyAccomodation(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccomodationsPage);
