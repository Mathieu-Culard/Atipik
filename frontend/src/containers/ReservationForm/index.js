import { connect } from 'react-redux';
import ReservationForm from 'src/components/ReservationForm';
import { changeDate, sendReservation } from 'src/actions/accomodation';
import { openModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  dateToFormated: state.accomodation.dateToFormated,
  dateFromFormated: state.accomodation.dateFromFormated,
  isLogged: state.connection.isLogged,
  dateFrom: state.accomodation.dateFrom,
  dateTo: state.accomodation.dateTo,
  accomodationId: state.accomodation.id,
});

const mapDispatchToProps = (dispatch) => ({
  sendReservation: (dateTo, dateFrom, accomodationId) => {
    dispatch(sendReservation(dateTo, dateFrom, accomodationId));
  },
  changeDate: (identifier, date, formatedDate) => {
    dispatch(changeDate(identifier, date, formatedDate));
  },
  openModal: (title, component) => {
    dispatch(openModal(title, component));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReservationForm);
