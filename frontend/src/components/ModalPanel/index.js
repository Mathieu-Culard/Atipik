/* eslint-disable no-useless-computed-key */
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import LoginForm from 'src/containers/LoginForm';
import InscriptionForm from 'src/containers/InscriptionForm';
import ContactForm from 'src/containers/ContactForm';
import LostPasswordForm from 'src/containers/LostPasswordForm';
import ContactOwnerPanel from 'src/containers/ContactOwnerPanel';
import ReservationForm from 'src/containers/ReservationForm';

const useStyles = makeStyles(() => ({
  root: {
  },
  box: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    ['@media(max-width:1024px)']: {
      top: '25%',
      left: '25%',
      transform: 'translate(-16%,-0%)',
    },
    padding: '2rem',
    borderRadius: '20px',
  },
  title: {
    marginBottom: '1rem',
  },
  errorMessage: {
    color: '#e64750',
    margin: '1rem 0',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '12px',
  },
}));

const ModalPanel = ({
  componentName,
  modal,
  closeModal,
  title,
  errorMessage,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={modal}
      onClose={() => closeModal()}
    >
      <Paper className={classes.box}>
        <h2 className={classes.title}>{title}</h2>
        {errorMessage !== '' && <p className={classes.errorMessage}>{errorMessage}</p>}
        {
          {
            LoginForm: <LoginForm />,
            InscriptionForm: <InscriptionForm />,
            ContactForm: <ContactForm />,
            LostPasswordForm: <LostPasswordForm />,
            ContactOwnerPanel: <ContactOwnerPanel />,
            ReservationForm: <ReservationForm />,
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
  errorMessage: PropTypes.string.isRequired,
};

export default ModalPanel;
