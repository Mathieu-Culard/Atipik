import React from 'react';

import './app.scss';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import SearchPage from 'src/pages/SearchPage';

const App = () => (
  <div className="app">
    <Header />
    <SearchPage />
    <Footer />
  </div>
);

// == Export
export default App;
