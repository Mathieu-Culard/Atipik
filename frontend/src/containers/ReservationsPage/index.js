import { connect } from 'react-redux';
import ReservationsPage from 'src/pages/ReservationsPage';

import { setBreadcrumbs } from 'src/actions/utils';
import { fetchReservations } from 'src/actions/reservations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
  fetchReservations: () => dispatch(fetchReservations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReservationsPage);
