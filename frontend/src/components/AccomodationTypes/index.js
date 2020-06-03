import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import './accomodationTypes.scss';

const useStyles = makeStyles(() => ({
  thematicContent: {
    display: 'flex',
  },
  type: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const AccomodationTypes = ({ types }) => {
  const classes = useStyles();

  return (
    <div>
      {types.map((thematic) => (
        <div key={thematic.id}>
          <h2>{thematic.name}</h2>
          <div className={classes.thematicContent}>
            {thematic.types.map((type) => (
              <div key={type.id} className={classes.type}>
                <h3>{type.name}</h3>
                <div className="type">
                  <img className="type__picture" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/${type.picture}`} alt={type.name} />
                  <img className="type__icon" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/${type.icon}`} alt={`icon ${type.name}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

AccomodationTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default AccomodationTypes;
