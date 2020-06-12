import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = ({ openModal }) => {
  const handleClick = (e) => {
    e.preventDefault();
    openModal('Formulaire de contact', 'ContactForm');
  };

  return (
    <footer className="footer">
      <a className="footer__link" href="" onClick={handleClick}>Contactez-nous</a>
    </footer>
  );
};

Footer.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Footer;
