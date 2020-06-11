import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './accomodationTypes.scss';

const AccomodationTypes = ({ types, changeAccomodationTypes }) => {
  const presetSearch = (id) => {
    changeAccomodationTypes(id, true, types);
  };

  return (
    <>
      <h2>Tu ne sais pas où aller ?</h2>
      <div className="accomodation-types__grid">
        {types.map((thematic) => (
          thematic.types.map((type) => (
            <Link
              key={type.id}
              to="/recherche"
              className="accomodation-types__element"
              onClick={() => presetSearch(type.id)}
            >
              <Card className="accomodation-types__card">
                <div className="accomodation-types__picture-container">
                  <CardMedia
                    image={`${process.env.REACT_APP_BACKEND_URL}/assets/type/${type.picture}`}
                    title={type.name}
                    className="accomodation-types__picture"
                  />
                </div>
                <CardContent className="accomodation-types__text">
                  <Typography variant="h5" component="h3">
                    {type.name}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    {type.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))
        ))}
      </div>
    </>
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
