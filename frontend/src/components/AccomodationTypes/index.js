import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './accomodationTypes.scss';

const CardStyle = makeStyles((theme) => ({
  root: {
    borderRadius: '20px !important',
    overflow: 'hiden',
  },
}));
const CardContentStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0, 0,0 , 0.7) !important',
    padding: '1.2rem 2rem',
  },
}));
const CardTitleStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    fontFamily: ' \'Crimson Text\',serif',
    fontWeight: '600',
    lineHeight: 0.8,
  },
}));
const CardTextStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '5px',
    lineHeight: 1,
    color: 'white',
    fontFamily: ' \'Montserrat\', sans-serif',
    fontWeight: '100',
    paddingBottom: '2rem',
  },
}));

const AccomodationTypes = ({ types, changeAccomodationTypes }) => {
  const cardTextClasses = CardTextStyles();
  const cardTitleClasses = CardTitleStyles();
  const cardClasses = CardStyle();
  const cardContentClasses = CardContentStyles();
  const presetSearch = (id) => {
    changeAccomodationTypes(id, true, types);
  };

  return (
    <>
      <h2 className="accomodation-types__title">Tu ne sais pas où aller ? Laisse nous te guider</h2>

      <div className="accomodation-types__grid">
        {types.map((thematic) => (
          thematic.types.map((type) => (
            <Link
              key={type.id}
              to="/recherche"
              className="accomodation-types__element"
              onClick={() => presetSearch(type.id)}
            >
              <Card className={`accomodation-types__card ${cardClasses.root}`}>
                <div className="accomodation-types__picture-container">
                  <CardMedia
                    image={`${process.env.REACT_APP_BACKEND_URL}/assets/type/${type.picture}`}
                    title={type.name}
                    className="accomodation-types__picture"
                  />
                </div>
                <CardContent className={`accomodation-types__text ${cardContentClasses.root}`}>
                  <Typography variant="h5" component="h3" className={cardTitleClasses.root}>
                    {type.name}
                  </Typography>
                  <Typography variant="subtitle2" component="p" className={cardTextClasses.root}>
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
