import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  pictures: {
    width: 200,
    flex: '0 0 auto',
  },
}));

const ResultCard = ({
  title,
  picture,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.pictures}
        image={picture}
        height="300"
        component="img"
      />
      <CardContent>
        <Typography variant="h3" component="h3">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

ResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ResultCard;
