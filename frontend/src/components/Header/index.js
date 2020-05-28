import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import LoginPanel from 'src/containers/LoginPanel';

import './header.scss';
import logo from '../../assets/logo.png';

const useStyles = makeStyles(() => ({
  root: {
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Header = ({
  open,
  toggleOpen,
  setLoginPanel,
  isLogged,
  disconnect,
}) => {
  const classes = useStyles();
  const mobileMenuLinksClass = classNames('header__links--mobile', { 'header__links--mobile--hide': !open });

  return (
    <header className="header">
      <nav className="header__nav">
        <section className="header__top-bar">
          <img className="header__logo" src={logo} alt="Logo" />
          <div className="header__links">
            <a className="header__link" href="#"> Nos hébergements </a>
            { isLogged && (
              <>
                <a className="header__link" href="#"> Inscription </a>
                <a className="header__link" href="#" onClick={() => setLoginPanel(true)}> Connexion </a>
                <LoginPanel />
              </>
            )}
            { isLogged && (
              <a className="header__link" href="#" onClick={disconnect}>Déconnexion</a>
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
        <section className="header__breadcrumb">
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link href="/">Accueil</Link>
            <Link href="#">Recherche</Link>
          </Breadcrumbs>
        </section>
        <List className={`${classes.root} ${mobileMenuLinksClass}`}>
          <ListItemLink href="#">
            <ListItemText primary="Nos hébergements" />
          </ListItemLink>
          <Divider className="header__divider" />
          <ListItemLink href="#">
            <ListItemText primary="Inscription" />
          </ListItemLink>
          <ListItemLink href="#">
            <ListItemText primary="Connexion" />
          </ListItemLink>
        </List>
      </nav>
    </header>
  );
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  setLoginPanel: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
};

export default Header;
