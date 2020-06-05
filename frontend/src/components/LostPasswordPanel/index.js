import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  box: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const LostPasswordPanel = ({
  email,
  lostPasswordPanel,
  setLostPasswordPanel,
  changeEmail,
  resetPassword,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLostPasswordPanel(false);
    resetPassword();
  };

  return (
    <Modal
      open={lostPasswordPanel}
      onClose={() => setLostPasswordPanel(false)}
    >
      <Box component="div" className={classes.box}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
        </form>
      </Box>
    </Modal>
  );
};

LostPasswordPanel.propTypes = {
  email: PropTypes.string.isRequired,
  lostPasswordPanel: PropTypes.bool.isRequired,
  setLostPasswordPanel: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

export default LostPasswordPanel;
