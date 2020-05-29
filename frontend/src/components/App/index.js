import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import './app.scss';
import Header from 'src/containers/Header';
import SearchPage from 'src/containers/SearchPage';

const App = ({ fetchAccomodationTypes }) => {
  useEffect(() => {
    fetchAccomodationTypes();
  }, []);
  return (
    <div className="app">
      <Header />
      <SearchPage />
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchAccomodationTypes: PropTypes.func.isRequired,
};

// == Export
export default App;
