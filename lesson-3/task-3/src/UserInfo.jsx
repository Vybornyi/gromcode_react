import React from 'react';
import Avatar from './Avatar';

const userInfo = props => (
  <div className="user-info">
    <Avatar user={props.user} />
    <div className="user-info__name">{props.user.name}</div>
  </div>
);
export default userInfo;
