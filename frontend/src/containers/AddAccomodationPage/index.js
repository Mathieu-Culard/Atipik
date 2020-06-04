import { connect } from 'react-redux';
import AddAccomodationPage from 'src/pages/AddAccomodationPage';
import { setManageAccomodationPanel } from 'src/actions/utils';
import {
  changeMyAccomodationFields,
  changeMyAccomodationSwitchs,
} from 'src/actions/manageAccomodation';

const mapStateToProps = (state) => ({
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
});

const mapDispatchToProps = (dispatch) => ({
  setManageAccomodationPanel: () => {
    dispatch(setManageAccomodationPanel());
  },
  changeFields: (identifier, newValue) => {
    dispatch(changeMyAccomodationFields(identifier, newValue));
  },
  changeSwitchs: (identifier) => {
    dispatch(changeMyAccomodationSwitchs(identifier));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAccomodationPage);
