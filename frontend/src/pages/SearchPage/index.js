import React from 'react';


import './searchPage.scss';
import ResultList from 'src/components/ResultList';
import Map from 'src/components/Map';

const elements = [
  {
    id: 1,
    title: 'Tendre son i-mac entre 2 arbres',
    description: 'Petit coin de forêt bucolique avec i-macs suspendus. Profitez d\' un peut de tranquilité, seul ou en famille.',
    pictures: [
      'https://picsum.photos/200',
      'https://picsum.photos/201',
    ],
    country: 'France',
    city: 'semoutiers-Montsaon',
    adress: ' 3 Rue du val quenille',
  },
  {
    id: 2,
    title: 'Apple sort le nouvel i-gloo',
    description: 'Si vous n\'êtes pas manchots, cet i-gloo est fait pour vous. Vous allez peut-être peler mais vous aller triper.',
    pictures: [
      'https://picsum.photos/202',
      'https://picsum.photos/203',
    ],
    country: 'France',
    city: 'semoutiers-Montsaon',
    adress: '25 Rue de chaumont',
  },
];

const SearchPage = () => (
  <div className="search-page">
    <ResultList elements={elements} />
    <Map elements={elements} />
  </div>
);

export default SearchPage;
