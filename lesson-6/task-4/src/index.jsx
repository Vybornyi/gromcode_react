import ReactDOM from 'react-dom';
import React from 'react';
import Status from './Status';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Status isOnline={true} />, rootElem);
