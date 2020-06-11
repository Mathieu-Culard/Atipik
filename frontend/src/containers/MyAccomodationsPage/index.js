import { connect } from 'react-redux';
import MyAccomodationsPage from 'src/pages/MyAccomodationsPage';

import { fetchMyAccomodations, deleteMyAccomodation } from 'src/actions/manageAccomodation';

const mapStateToProps = (state) => ({
  myAccomodationIds: state.user.accomodations,
  myAccomodations: state.manageAccomodation.myAccomodations,
  typeList: state.data.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({

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
