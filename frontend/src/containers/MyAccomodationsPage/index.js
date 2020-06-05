import { connect } from 'react-redux';
import MyAccomodationsPage from 'src/pages/MyAccomodationsPage';

import { fetchMyAccomodations } from 'src/actions/manageAccomodation';


const mapStateToProps = (state) => ({
  myAccomodationIds: state.user.accomodations,
  myAccomodations: state.manageAccomodation.myAccomodations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyAccomodations: (id) => {
    dispatch(fetchMyAccomodations(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccomodationsPage);
