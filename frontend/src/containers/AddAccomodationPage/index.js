import { connect } from 'react-redux';
import AddAccomodationPage from 'src/pages/AddAccomodationPage';
import { setManageAccomodationPanel } from 'src/actions/utils';
import {
  changeMyAccomodationFields,
  changeMyAccomodationSwitchs,
  changeMyAccomodationType,
  submitAddAccomodationForm,
  setEditMyAccomodationInfos,
  resetMyAccomodationInfos,
  submitEditMyAccomodationForm,
} from 'src/actions/manageAccomodation';

const mapStateToProps = (state) => ({
  typeValue: state.manageAccomodation.type,
  allTypes: state.data.accomodationTypes,
  priceValue: state.manageAccomodation.price,
  surfaceValue: state.manageAccomodation.surface,
  nbNightsValue: state.manageAccomodation.nbNights,
  capacityValue: state.manageAccomodation.capacity,
  titleValue: state.manageAccomodation.title,
  cityValue: state.manageAccomodation.city,
  countryValue: state.manageAccomodation.country,
  adressValue: state.manageAccomodation.adress,
  facebookValue: state.manageAccomodation.facebook,
  instagramValue: state.manageAccomodation.instagram,
  descriptionValue: state.manageAccomodation.description,
  pipedWaterValue: state.manageAccomodation.pipedWater,
  electricityValue: state.manageAccomodation.electricity,
  accessibilityValue: state.manageAccomodation.accessibility,
  smokersValue: state.manageAccomodation.smokers,
  animalsValue: state.manageAccomodation.animals,
  servicesList: state.accomodation.services,
  extrasList: state.accomodation.extras,
  servicesValue: state.manageAccomodation.services,
  extrasValue: state.manageAccomodation.extras,
});

const mapDispatchToProps = (dispatch) => ({
  submitAdd: () => {
    dispatch(submitAddAccomodationForm());
  },
  submitEdit: (id) => {
    dispatch(submitEditMyAccomodationForm(id));
  },
  setManageAccomodationPanel: (content, identifier) => {
    dispatch(setManageAccomodationPanel(content, identifier));
  },
  changeFields: (identifier, newValue) => {
    dispatch(changeMyAccomodationFields(identifier, newValue));
  },
  changeSwitchs: (identifier) => {
    dispatch(changeMyAccomodationSwitchs(identifier));
  },
  changeType: (newValue) => {
    dispatch(changeMyAccomodationType(newValue));
  },
  setInfo: (id) => {
    dispatch(setEditMyAccomodationInfos(id));
  },
  resetInfo: () => {
    dispatch(resetMyAccomodationInfos());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAccomodationPage);
