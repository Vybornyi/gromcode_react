import React from 'react';
import './index.scss';

const Mailbox = ({ unreadMessages }) => (
  <div className="mailbox">
    <span className="mailbox__text">messages</span>
    {unreadMessages.length > 0 && <span className="mailbox__count">{unreadMessages.length}</span>}
  </div>
);

export default Mailbox;
