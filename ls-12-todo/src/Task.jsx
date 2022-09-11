import React from 'react';
import classNames from 'classnames';

const Task = ({ id, text, done, handleChange, handleDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => handleChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => handleDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};
export default Task;
