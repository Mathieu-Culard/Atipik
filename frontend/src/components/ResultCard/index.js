import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  pictures: {
    width: 200,
    flex: '0 0 auto',
    margin: '.5rem',
    borderRadius: '.5rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'bold',
    marginBottom: '.5rem',
  },
}));

const ResultCard = ({
  title,
  picture,
  description,
  country,
  city,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.pictures}
        image={picture}
        component="img"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle2" className={classes.location}>
          {city}, {country}
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
          {description}
        </Typography>
        <Button size="small" color="primary" variant="outlined">En savoir plus</Button>
      </CardContent>
    </Card>
  );
};

ResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default ResultCard;
