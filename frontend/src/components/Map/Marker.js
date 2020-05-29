import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ icon }) => (
  <div className="pin1">
    {/* <div>
      <img src={icon} alt="icon" />
    </div> */}
  </div>
);

Marker.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Marker;
