import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const accordionContent = [
  {
    subject: 'Narwhal',
    description: 'The narwhal, also known as a narwhale, is a medium-sized toothed whale that possesses a large "tusk" from a protruding canine tooth.'
  },
  {
    subject: 'Unicorn',
    description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead'
  },
  {
    subject: 'Wolpertinger',
    description: 'The Wolpertinger is known as having the head of a hare, the body of a squirrel, the antlers of a deer, and the wings and occasionally the legs of a pheasant.'
  }
];

ReactDOM.render(
  <Accordion content={accordionContent}/>,
  document.querySelector('#root')
);
