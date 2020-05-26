import React from 'react';

import ResultList from 'src/components/ResultList';

const elements = [
  {
    id: 1,
    title: 'Hamac à louer',
    description: 'coucou',
    picture: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Apple sort le nouvel i-gloo',
    description: 'michel',
    picture: 'https://picsum.photos/201',
  },
];

const SearchPage = () => (
  <ResultList elements={elements} />
);

export default SearchPage;
