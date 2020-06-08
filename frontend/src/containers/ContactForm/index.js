import { connect } from 'react-redux';
import { sendMessageToAdmin, changeContactFields, resetContactMessage } from 'src/actions/contact';
import ContactForm from 'src/components/ContactForm';

const mapStateToProps = (state) => ({
  emailValue: state.contact.email,
  objectValue: state.contact.object,
  messageValue: state.contact.message,
  regexEmail: state.utils.regexEmail,
});

const mapDispatchToProps = (dispatch) => ({
  changeFields: (identifier, newValue) => {
    dispatch(changeContactFields(identifier, newValue));
  },
  sendMessage: () => {
    dispatch(sendMessageToAdmin());
  },
  resetContactMessage: () => dispatch(resetContactMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
