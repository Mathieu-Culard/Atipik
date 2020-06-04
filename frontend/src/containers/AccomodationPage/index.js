import { connect } from 'react-redux';
import AccomodationPage from 'src/pages/AccomodationPage';
import { fetchAccomodation, changeDate, sendReservation } from 'src/actions/accomodation';
import { setContactOwnerPanel, setLoginPanel } from 'src/actions/utils';


const mapStateToProps = (state) => ({
  dateToFormated: state.accomodation.dateToFormated,
  dateFromFormated: state.accomodation.dateFromFormated,
  servicesList: state.accomodation.services,
  extrasList: state.accomodation.extras,
  isLogged: state.user.isLogged,
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
  setLoginPanel: (newValue) => {
    dispatch(setLoginPanel(newValue));
  },
  fetchAccomodation: (id) => {
    dispatch(fetchAccomodation(id));
  },
  setContactOwnerPanel: (newValue) => dispatch(setContactOwnerPanel(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationPage);
