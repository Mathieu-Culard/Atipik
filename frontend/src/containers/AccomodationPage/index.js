import { connect } from 'react-redux';
import AccomodationPage from 'src/pages/AccomodationPage';
import { fetchAccomodation, changeDate, sendReservation } from 'src/actions/accomodation';
import { openModal } from 'src/actions/utils';
// import { setContactOwnerPanel, openModal, setBreadcrumbs } from 'src/actions/utils';


const mapStateToProps = (state) => ({
  isLoading: state.accomodation.isLoading,
  dateToFormated: state.accomodation.dateToFormated,
  dateFromFormated: state.accomodation.dateFromFormated,
  servicesList: state.accomodation.services,
  extrasList: state.accomodation.extras,
  isLogged: state.connection.isLogged,
  owner: state.accomodation.owner,
  dateFrom: state.accomodation.dateFrom,
  dateTo: state.accomodation.dateTo,
  accomodationId: state.accomodation.id,
  accomodation: state.accomodation.currentAccomodation,
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
  fetchAccomodation: (id) => {
    dispatch(fetchAccomodation(id));
  },
  setContactOwnerPanel: (newValue) => dispatch(setContactOwnerPanel(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationPage);
