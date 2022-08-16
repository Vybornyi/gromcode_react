import React from 'react';
import './comment.scss';

import UserInfo from './UserInfo';

function Comment(props) {
  return <UserInfo user={props.author} text={props.text} data={props.date} />;
}

export default Comment;
