import { connect } from 'react-redux';
import ReservationsPage from 'src/pages/ReservationsPage';

import { fetchReservations } from 'src/actions/reservations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchReservations: () => dispatch(fetchReservations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReservationsPage);
