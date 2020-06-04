import { connect } from 'react-redux';

import ContactOwnerPanel from 'src/components/ContactOwnerPanel';

import { setContactOwnerPanel } from 'src/actions/utils';
import { sendMessage, changeContactOwnerPanelFields } from 'src/actions/accomodation';

const mapStateToProps = (state) => ({
  isManageAccomodationPanelOpen: state.utils.isManageAccomodationPanelOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setManageAccomodationPanel: (newValue) => dispatch(setContactOwnerPanel(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactOwnerPanel);
