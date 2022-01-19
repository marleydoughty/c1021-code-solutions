import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemonImages = ['https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg', 'https://i.pinimg.com/originals/e2/23/1c/e2231c4f90fae48e85d9ff78dd768ee0.png', 'https://pokestop.io/img/pokemon/turtwig-256x256.png', 'https://i.pinimg.com/originals/94/0c/6e/940c6e6e4fd248f49df39d03c265a198.jpg', 'https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png'];

ReactDOM.render(
  <Carousel imageUrl={pokemonImages}/>,
  document.querySelector('#root')
);
