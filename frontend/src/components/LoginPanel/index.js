import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LoginPanel = ({ closeLoginPanel }) => {
  const clickEventFunction = (e) => {
    e.stopPropagation();
    closeLoginPanel();
  };

  const escapeEventFunction = (e) => {
    if (e.keyCode === 27) {
      closeLoginPanel();
    }
  };

  const addClosingEventListeners = () => {
    document.addEventListener('click', clickEventFunction);
    window.addEventListener('keydown', escapeEventFunction);
  };

  const removeClosingEventListeners = () => {
    document.removeEventListener('click', clickEventFunction);
    window.removeEventListener('keydown', escapeEventFunction);
  };

  useEffect(() => {
    addClosingEventListeners();
    return function cleanUp() {
      removeClosingEventListeners();
    };
  }, []);

  return (
    <div>coucou</div>
  );
};

LoginPanel.propTypes = {
  closeLoginPanel: PropTypes.func.isRequired,
};

export default LoginPanel;
