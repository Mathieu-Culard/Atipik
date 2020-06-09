import { connect } from 'react-redux';
import AccomodationPage from 'src/pages/AccomodationPage';
import { fetchAccomodation, changeDate, sendReservation } from 'src/actions/accomodation';
import { setContactOwnerPanel, openModal, setBreadcrumbs } from 'src/actions/utils';


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
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),

  sendReservation: (dateTo, dateFrom, accomodationId) => {
    dispatch(sendReservation(dateTo, dateFrom, accomodationId));
  },
  changeDate: (identifier, date, formatedDate) => {
    dispatch(changeDate(identifier, date, formatedDate));
  },
  openModal: (component) => {
    dispatch(openModal(component));
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
