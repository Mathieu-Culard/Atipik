
import React from 'react';

import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import './app.scss';
import Header from 'src/containers/Header';

const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
