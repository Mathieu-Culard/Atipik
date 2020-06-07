import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'react-feather';

import './footer.scss';

const Footer = ({ openModal }) => (
  <footer className="footer">
    <div className="footer__social-networks">
      <a className="footer__social-network" href="https://facebook.com/"> <Facebook size={30} /> </a>
      <a className="footer__social-network" href="https://instagram.com/"> <Instagram size={30} /> </a>
    </div>
    <div className="footer__links">
      <a className="footer__link" href="#" onClick={() => openModal('Formulaire de contact', 'ContactForm')}>Contactez-nous</a>
      <Link className="footer__link" to="#">Plan du site</Link>
      <Link className="footer__link" to="#">Mentions légales</Link>
    </div>
    <p className="footer__copyright">o'clock - All right's reserved</p>
  </footer>
);

Footer.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Footer;
