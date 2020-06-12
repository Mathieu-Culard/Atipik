import { connect } from 'react-redux';
import SuccessSnackbar from 'src/components/SuccessSnackbar';

import { closeSuccessSnackbar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  success: state.utils.success,
  successMessage: state.utils.successMessage,
  messageSeverity: state.utils.messageSeverity,
});

const mapDispatchToProps = (dispatch) => ({
  closeSuccessSnackbar: () => dispatch(closeSuccessSnackbar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessSnackbar);
