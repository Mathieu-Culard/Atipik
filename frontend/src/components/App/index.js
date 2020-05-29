import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import LoginPanel from 'src/containers/LoginPanel';

const App = ({ checkLogged }) => {
  // useEffect(() => {
  //   checkLogged();
  // }, []);
  return (
    <div className="app">
      <Header />
      <LoginPanel />
      <Footer />
    </div>
  );
};

// App.propTypes = {
//   checkLogged: PropTypes.func.isRequired,
// };

// == Export
export default App;
