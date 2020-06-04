/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import './contactOwnerPanel.scss';

const useStyles = makeStyles(() => ({
  box: {
    width: '80%',
    height: '650px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const ContactOwnerPanel = ({
  changeField,
  isContactOwnerPanelOpen,
  message,
  object,
  setContactOwnerPanel,
  sendMessage,
  userId,
  accomodationId,
}) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactOwnerPanel(false);
    sendMessage(message, object, userId, accomodationId);
  };

  return (
    <Modal
      open={isContactOwnerPanelOpen}
      onClose={() => setContactOwnerPanel(false)}
      className={classes.root}
    >
      <Box component="div" className={classes.box}>

        <form onSubmit={handleSubmit} className="contact-owner-form">
          <h1 className="contact-owner-form__title">Envoyer un message au propriétaire</h1>

          <label className="contact-owner-form__label" htmlFor="contact-owner-object">
            Objet
            <TextareaAutosize
              className="contact-owner-form__input"
              id="contact-owner-object"
              label="Objet"
              value={object}
              onChange={(e) => changeField('userMessageObject', e.target.value)}
            />
          </label>

          <label className="contact-owner-form__label">
            Votre message
            <TextareaAutosize
              className="contact-owner-form__input"
              id="contact-owner-message"
              label="Message"
              value={message}
              rowsMin={10}
              onChange={(e) => changeField('userMessage', e.target.value)}
            />
          </label>

          <Button type="submit" variant="text">Envoyer</Button>
        </form>
      </Box>
    </Modal>
  );
};

ContactOwnerPanel.propTypes = {
  changeField: PropTypes.func.isRequired,
  isContactOwnerPanelOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  setContactOwnerPanel: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  accomodationId: PropTypes.number.isRequired,
};

export default ContactOwnerPanel;
