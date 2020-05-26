import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ResultCard from 'src/components/ResultCard';

const ResultList = ({ elements }) => (
  <List>
    { elements.map((e) => (
      <ListItem alignItems="flex-start" key={e.id}>
        <ResultCard {...e} />
      </ListItem>
    ))}
  </List>
);

ResultList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ResultList;
