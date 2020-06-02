import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import Header from 'src/containers/Header';
import SearchPage from 'src/containers/SearchPage';

import './app.scss';

const App = ({ fetchAccomodationTypes }) => {
  useEffect(() => {
    fetchAccomodationTypes();
    localStorage.setItem('apiKey', 'AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts');
  }, []);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/recherche">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchAccomodationTypes: PropTypes.func.isRequired,
};

// == Export
export default App;
