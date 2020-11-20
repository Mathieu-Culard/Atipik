import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { truncateDescription } from 'src/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './resultCard.scss';

const useStyles = makeStyles(() => ({
  card: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
    height: '200px',
    backgroundColor: 'rgba(255, 255, 255, .85)',
    borderRadius: '20px',
    transition: 'transform .2s ease',
    '&:hover': {
      transform: 'translateX(10px)',
    },
    // eslint-disable-next-line no-useless-computed-key
    ['@media(max-width:1024px)']: {
      flexDirection: 'column',
      height: 'fit-content',
      '&:hover': {
        transform: 'translateX(0px)',
      },
    },

  },
  pictures: {
    width: '220px',
    flex: '0 0 auto',
    // eslint-disable-next-line no-useless-computed-key
    ['@media(max-width:1024px)']: {
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1rem 1.5rem !important',
  },
  description: {
    flex: 1,
    margin: '.5rem 0',
    textAlign: 'justify',
    fontWeight: 100,
    // eslint-disable-next-line no-useless-computed-key
    ['@media(max-width:1024px)']: {
      display: 'none',
    },
  },
  location: {
    fontWeight: 500,
  },
  title: {
    fontFamily: 'Crimson Text !important',
    fontWeight: 700,
  },
  button: {
    margin: 'auto',
    backgroundColor: 'transparent',
    border: '1px solid #fe922d',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    padding: '.5rem 2rem',
    borderRadius: '.5rem',
    transition: 'border .2s',
    '&:hover': {
      border: '1px solid #e64750',
    },
  },
}));

const ResultCard = ({
  title,
  pictures,
  description,
  country,
  city,
  id,
}) => {
  const classes = useStyles();
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <Link to={`/hebergement/${id}`} className="result-card">
      <Card className={classes.card}>
        <Slider {...carouselSettings} className={classes.pictures}>
          {pictures.map((picture) => (<div key={picture}><img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${picture}`} alt="" width="220" /></div>))}
        </Slider>
        <CardContent className={classes.content}>
          <Typography variant="h6" component="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle2" className={classes.location}>
            {city}, {country}
          </Typography>
          <p className={classes.description}>
            {truncateDescription(description)}
          </p>
          <button type="button" className={classes.button}>En savoir plus</button>
        </CardContent>
      </Card>
    </Link>
  );
};

ResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default ResultCard;
