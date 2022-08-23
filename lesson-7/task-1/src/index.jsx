import ReactDOM from 'react-dom';
import React from 'react';
import NumbersList from './NumbersList';

const rootElem = document.querySelector('#root');

const numbersArray = [1, 2, 4, 4, 5];

ReactDOM.render(<NumbersList numbers={numbersArray} />, rootElem);
