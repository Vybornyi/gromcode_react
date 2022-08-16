import React from 'react';

import Avatar from './Avatar';
import './userInfo.scss';

const userInfo = props => (
  <>
    <div className="user-info">
      <Avatar name={props.user.name} avatarUrl={props.user.avatarUrl} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
    <div className="comment__text">{props.text}</div>
    <div className="comment__date">{props.date}</div>
  </>
);
export default userInfo;
