import React from 'react';

import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'react-feather';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social-networks">
      <a className="footer__social-network" href="https://facebook.com/"> <Facebook size={30} /> </a>
      <a className="footer__social-network" href="https://instagram.com/"> <Instagram size={30} /> </a>
    </div>
    <div className="footer__links">
      <Link className="footer__link" to="/contact">Contactez-nous</Link>
      <Link className="footer__link" to="#">Plan du site</Link>
      <Link className="footer__link" to="#">Mentions légales</Link>
    </div>
    <p className="footer__copyright">o'clock - All right's reserved</p>
  </footer>
);

export default Footer;
