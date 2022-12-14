import React from 'react';
import moment from 'moment';
import './comment.scss';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} text={props.text} date={formatDate(props.date)} />
    </div>
  );
}

export default Comment;
