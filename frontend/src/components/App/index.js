import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Footer from 'src/containers/Footer';
import Header from 'src/containers/Header';
import HomePage from 'src/containers/Home';
import SearchPage from 'src/containers/SearchPage';
import AccomodationPage from 'src/containers/AccomodationPage';
import ProfilePage from 'src/containers/ProfilePage';
import AccomodationTypesPage from 'src/containers/AccomodationTypesPage';
import MyAccomodationsPage from 'src/containers/MyAccomodationsPage';
import AddAccomodationPage from 'src/containers/AddAccomodationPage';
import ReservationsPage from 'src/containers/ReservationsPage';
import ModalPanel from 'src/containers/ModalPanel';
import Loader from 'src/components/Loader';

import './app.scss';

const App = ({
  modal,
  fetchAccomodationTypes,
  fetchServices,
  fetchExtras,
  fetchUserInfos,
}) => {
  useEffect(() => {
    fetchUserInfos();
    fetchAccomodationTypes();
    fetchServices();
    fetchExtras();
    localStorage.setItem('apiKey', 'AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts');
  }, []);
  return (
    <div className="app">
      <Header />
      <Loader />
      <Switch>
        <Route path="/recherche">
          <SearchPage />
        </Route>
        <Route path="/hebergement/:id">
          <AccomodationPage />
        </Route>
        <Route path="/profil">
          <ProfilePage />
        </Route>
        <Route path="/reservations">
          <ReservationsPage />
        </Route>
        <Route path="/types">
          <AccomodationTypesPage />
        </Route>
        <Route path="/gerer-mes-hebergements/modifier-un-hebergement/:id">
          <AddAccomodationPage />
        </Route>
        <Route path="/gerer-mes-hebergements/nouvel-hebergement">
          <AddAccomodationPage />
        </Route>
        <Route path="/gerer-mes-hebergements">
          <MyAccomodationsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
      {modal && <ModalPanel />}
    </div>
  );
};

App.propTypes = {
  modal: PropTypes.bool.isRequired,
  fetchAccomodationTypes: PropTypes.func.isRequired,
  fetchServices: PropTypes.func.isRequired,
  fetchExtras: PropTypes.func.isRequired,
  fetchUserInfos: PropTypes.func.isRequired,
};

// == Export
export default App;
