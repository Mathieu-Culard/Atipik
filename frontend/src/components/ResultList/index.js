/* eslint-disable no-useless-computed-key */
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import ResultCard from 'src/components/ResultCard';

const useStyles = makeStyles(() => ({
  root: {
    overflowY: 'auto',
    marginLeft: '-20px',
    paddingLeft: '20px',
    paddingTop: 0,
    width: '38%',
    height: '70vh',
    ['@media(max-width:760px)']: {
      width: '100%',
      height: 'fit-content',
      overflowY: 'hidden',
    },
  },
}));

const ResultList = ({ elements }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {elements.length === 0 && <p>Aucun résultat à afficher</p>}
      {elements.map((e) => (
        <ListItem alignItems="flex-start" key={e.id}>
          <ResultCard {...e} />
        </ListItem>
      ))}
    </List>
  );
};

ResultList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ResultList;
