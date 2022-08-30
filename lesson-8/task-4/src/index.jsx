import ReactDOM from 'react-dom';
import React from 'react';
import User from './User';

const rootElem = document.querySelector('#root');
ReactDOM.render(<User userId="github" />, rootElem);
