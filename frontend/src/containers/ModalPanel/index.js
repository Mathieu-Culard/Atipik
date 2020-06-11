import { connect } from 'react-redux';

import ModalPanel from 'src/components/ModalPanel';

import { closeModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  componentName: state.utils.modalComponent,
  modal: state.utils.modal,
  title: state.utils.modalTitle,
  errorMessage: state.utils.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalPanel);
