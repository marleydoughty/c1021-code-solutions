import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemonImages = [];

ReactDOM.render(
  <Carousel content={pokemonImages}/>,
  document.querySelector('#root')
);
