import React from 'react';
import moment from 'moment';
import Avatar from './Avatar';
import './comment.scss';

const UserInfo = props => {
  return (
    <>
      <div className="user-info">
        <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
        <div className="user-info__name">{props.user.name}</div>
      </div>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{props.date}</div>
    </>
  );
};

export default UserInfo;
