import { connect } from 'react-redux';
import { sendMessageToAdmin, changeContactFields } from 'src/actions/contact';
import ContactPage from 'src/pages/ContactPage';

const mapStateToProps = (state) => ({
  emailValue: state.contact.email,
  objectValue: state.contact.object,
  messageValue: state.contact.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeFields: (identifier, newValue) => {
    dispatch(changeContactFields(identifier, newValue));
  },
  sendMessage: () => {
    dispatch(sendMessageToAdmin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactPage);
