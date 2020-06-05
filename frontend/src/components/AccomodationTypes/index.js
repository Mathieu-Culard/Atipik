import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './accomodationTypes.scss';

const useStyles = makeStyles(() => ({
  thematicContent: {
    display: 'flex',
  },
  accomodationType: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const AccomodationTypes = ({ types, changeAccomodationTypes }) => {
  const classes = useStyles();

  const presetSearch = (id) => {
    changeAccomodationTypes(id, true);
  };

  return (
    <div>
      {types.map((thematic) => (
        <div key={thematic.id}>
          <h2>{thematic.name}</h2>
          <div className={classes.thematicContent}>
            {thematic.types.map((type) => (
              <div key={type.id} className={classes.accomodationType}>
                <h3>{type.name}</h3>
                <Link to="/recherche" className="accomodation-type" onClick={() => presetSearch(type.id)}>
                  <img className="accomodation-type__picture" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/${type.picture}`} alt={type.name} />
                  <img className="accomodation-type__icon" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${type.icon}`} alt={`icon ${type.name}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

AccomodationTypes.propTypes = {
  changeAccomodationTypes: PropTypes.func.isRequired,
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
