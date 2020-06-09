import { connect } from 'react-redux';
import ReservationsPage from 'src/pages/ReservationsPage';

import { setBreadcrumbs } from 'src/actions/utils';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReservationsPage);
