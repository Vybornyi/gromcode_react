import React from 'react';
import moment from 'moment';
import Avatar from './Avatar';
import './userInfo.scss';

const formatDate = date => moment(date).format('DD MMM YYYY');

const userInfo = props => (
  <div className="comment">
    <div className="user-info">
      <Avatar name={props.user.name} avatarUrl={props.user.avatarUrl} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
    <div className="comment__text">{props.text}</div>
    <div className="comment__date">{formatDate(props.date)}</div>
  </div>
);
export default userInfo;
