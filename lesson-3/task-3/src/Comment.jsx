import React from 'react';
import './comment.scss';

import UserInfo from './UserInfo';

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} text={props.text} />
    </div>
  );
}

export default Comment;
