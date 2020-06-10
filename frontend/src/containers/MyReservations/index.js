import { connect } from 'react-redux';

import MyReservations from 'src/components/MyReservations';

const mapStateToProps = (state) => ({
  reservations: state.reservations.reservations.myReservations,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyReservations);
