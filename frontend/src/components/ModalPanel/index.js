import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import LoginForm from 'src/containers/LoginForm';
import InscriptionForm from 'src/containers/InscriptionForm';
import ContactForm from 'src/containers/ContactForm';
import LostPasswordForm from 'src/containers/LostPasswordForm';

const useStyles = makeStyles(() => ({
  root: {
  },
  box: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const ModalPanel = ({
  componentName,
  modal,
  closeModal,
  title,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={modal}
      onClose={() => closeModal()}
    >
      <Paper className={classes.box}>
        <h2>{title}</h2>
        {
          {
            LoginForm: <LoginForm />,
            InscriptionForm: <InscriptionForm />,
            ContactForm: <ContactForm />,
            LostPasswordForm: <LostPasswordForm />,
          }[componentName]
        }
      </Paper>
    </Modal>
  );
};

ModalPanel.propTypes = {
  componentName: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalPanel;