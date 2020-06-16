import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SuccessSnackbar = ({ success, successMessage, closeSuccessSnackbar, messageSeverity }) => (
  <Snackbar open={success} onClose={closeSuccessSnackbar}>
    <Alert severity={messageSeverity} onClose={closeSuccessSnackbar}>
      {successMessage}
    </Alert>
  </Snackbar>
);

SuccessSnackbar.propTypes = {
  success: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  closeSuccessSnackbar: PropTypes.func.isRequired,
  messageSeverity: PropTypes.string.isRequired,
};

export default SuccessSnackbar;
