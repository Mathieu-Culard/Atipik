import { connect } from 'react-redux';

import ContactOwnerPanel from 'src/components/ContactOwnerPanel';

import { setContactOwnerPanel } from 'src/actions/utils';
import { sendMessage, changeContactOwnerPanelFields } from 'src/actions/accomodation';

const mapStateToProps = (state) => ({
  userId: state.user.id,
  isContactOwnerPanelOpen: state.utils.isContactOwnerPanelOpen,
  message: state.accomodation.userMessage,
  object: state.accomodation.userMessageObject,
  accomodationId: state.accomodation.id,
});

const mapDispatchToProps = (dispatch) => ({
  setContactOwnerPanel: (newValue) => dispatch(setContactOwnerPanel(newValue)),
  sendMessage: (object, message, userId, accomodationId) => {
    dispatch(sendMessage(object, message, userId, accomodationId));
  },
  changeField: (identifier, newValue) => {
    dispatch(changeContactOwnerPanelFields(identifier, newValue));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactOwnerPanel);
