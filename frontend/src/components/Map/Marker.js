import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles(() => ({
  pictures: {
    width: 200,
    height: 125,
    flex: '0 0 auto',
    margin: 'auto ',
    overflow: 'hidden',
    borderRadius: '20px 20px 0 0',
  },
}));

const Marker = ({
  title, city, country, type, pictures, id
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

    <div className="marker">
      <div className="pin">
        <div className="pin__icon">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${type.icon}`} alt="icon" width="25" />
        </div>
      </div>
      <Link to={`/hebergement/${id}`} className="marker__card">
        <Slider {...carouselSettings} className={classes.pictures}>
          {pictures.map((picture) => (<div key={picture}><img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${picture}`} alt="" width="200" /></div>))}
        </Slider>
        <div className="marker__card__content">
          <h3 className="marker__card__content__title">{title}</h3>
          <p className="marker__card__content__location">{`${city}, ${country}`}</p>
          <p className="marker__card__content__type">{type.name}</p>
        </div>
      </Link>
    </div>
  );
};

// Marker.propTypes = {
//   icon: PropTypes.string.isRequired,
// };

export default Marker;
