import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const LostPasswordForm = ({
  email,
  changeEmail,
  resetPassword,
  resetContactMessage,
  regexEmail,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword();
  };

  useEffect(() => (resetContactMessage), []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
        error={email !== '' && !regexEmail.test(email)}
      />
    </form>
  );
};

LostPasswordForm.propTypes = {
  email: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  resetContactMessage: PropTypes.func.isRequired,
  regexEmail: PropTypes.instanceOf(RegExp).isRequired,
};

export default LostPasswordForm;
