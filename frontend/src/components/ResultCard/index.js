import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { truncateDescription } from 'src/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './resultCard.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  card: {
    display: 'flex',
    width: '100%',
    transition: 'transform .2s ease',
    '&:hover': {
      transform: 'translateX(10px)',
    },
  },
  pictures: {
    width: 150,
    height: 150,
    flex: '0 0 auto',
    margin: 'auto .5rem',
    borderRadius: '.5rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    flex: 1,
    margin: '.5rem 0',
    textAlign: 'justify',
  },
  location: {
    fontWeight: 'bold',
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

    <Link to={`/hebergement/${id}`}>
      <Card className={classes.root}>
        <Slider {...carouselSettings} className={classes.pictures}>
          {pictures.map((picture) => (<div key={picture}><img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${picture}`} alt="" width="150" /></div>))}
        </Slider>
        <CardContent className={classes.content}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="subtitle2" className={classes.location}>
            {city}, {country}
          </Typography>
          <Typography variant="body2" component="p" className={classes.description}>
            {truncateDescription(description)}
          </Typography>
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
