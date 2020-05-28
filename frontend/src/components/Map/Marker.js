import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ text }) => (
  <div>{text}</div>
);

Marker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Marker;
