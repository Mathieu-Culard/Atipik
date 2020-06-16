import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';

import './contactForm.scss';

const useStyles = makeStyles({
  textField: {
    width: '100%',
    resize: 'none',
    marginBottom: '1rem',
    padding: '.8rem',
  },
});

const ContactForm = ({
  emailValue,
  objectValue,
  messageValue,
  changeFields,
  sendMessage,
  resetContactMessage,
  regexEmail,
}) => {
  const classes = useStyles();

  useEffect(() => (resetContactMessage), []);

  const handleChange = (evt) => {
    changeFields(evt.target.id, evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  const isValid = () => {
    if (emailValue === '' || !regexEmail.test(emailValue)) return false;
    if (objectValue === '') return false;
    if (messageValue === '') return false;
    return true;
  };

  return (
    <form className="contact-page__form" onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={emailValue}
        onChange={handleChange}
        error={emailValue !== '' && !regexEmail.test(emailValue)}
      />
      <TextField id="object" label="Objet" className={classes.textField} value={objectValue} onChange={handleChange} />
      <label className="contact-page__form__label" htmlFor="message">
        Votre message
        <TextareaAutosize
          className={classes.textField}
          id="message"
          label="Message"
          value={messageValue}
          rowsMin={20}
          onChange={handleChange}
        />
      </label>
      <Button type="submit" className="contact-page__form__submit" disabled={!isValid()}>Envoyer</Button>
    </form>
  );
};

ContactForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  objectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  changeFields: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  resetContactMessage: PropTypes.func.isRequired,
  regexEmail: PropTypes.instanceOf(RegExp).isRequired,
};
export default ContactForm;
