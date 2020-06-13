/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import './header.scss';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    position: 'fixed',
    top: '4rem',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
}));

const Header = ({
  open,
  toggleOpen,
  openModal,
  isLogged,
  disconnect,
  userAccomodations,
  openSuccessSnackbar,
  isAdmin,
}) => {
  const classes = useStyles();
  const mobileMenuLinksClass = classNames('header__links--mobile', { 'header__links--mobile--hide': !open });

  const handleDisconnection = () => {
    disconnect();
    openSuccessSnackbar('Vous avez été déconnecté avec succès', 'success');
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <section className="header__top-bar">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Logo" />
          </Link>
          <div className="header__links">
            {!isLogged && (
              <>
                <a className="header__link" href="#" onClick={() => openModal('Inscription', 'InscriptionForm')}> Inscription </a>
                <a className="header__link" href="#" onClick={() => openModal('Connexion', 'LoginForm')}> Connexion </a>
              </>
            )}
            {isLogged && (
              <>
                {isAdmin && <a className="header__link" href="http://ec2-54-210-189-246.compute-1.amazonaws.com/login">Panneau d'administration</a>}
                <Link className="header__link" to="/profil"> Mon Profil </Link>
                <Link className="header__link" to="/reservations"> Mes Réservations </Link>
                {userAccomodations.length === 0 && <Link className="header__link" to="/gerer-mes-hebergements/nouvel-hebergement"> Ajouter un hébergement </Link>}
                {userAccomodations.length > 0 && <Link className="header__link" to="/gerer-mes-hebergements">Gerer mes hebergements</Link>}
                <a className="header__link" href="#" onClick={handleDisconnection}>Déconnexion</a>
              </>
            )}
          </div>
          <input onChange={toggleOpen} name="hamburger-toggle" type="checkbox" id="hamburger-toggle" value={open} />
          <label className="header__hamburger" htmlFor="hamburger-toggle">
            <span />
            <span />
            <span />
            <span />
          </label>
        </section>
        <List className={`${classes.list} ${mobileMenuLinksClass}`}>
          <Link to="#"> Nos hébergements </Link>
          <Divider className="header__divider" />
          <Link to="#"> Inscription </Link>
          <Link to="#"> Connexion </Link>
        </List>
      </nav>
    </header >
  );
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
  userAccomodations: PropTypes.array.isRequired,
  openSuccessSnackbar: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Header;
