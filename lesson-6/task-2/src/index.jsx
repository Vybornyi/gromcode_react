import ReactDOM from 'react-dom';
import React from 'react';
import Mailbox from './Mailbox';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[]} />, rootElem);
