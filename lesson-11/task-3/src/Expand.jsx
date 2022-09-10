import React from 'react';

const Expand = ({ isVisible, children, title, onToogle }) => {
  const arrowDirection = isVisible ? 'up' : 'down';
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToogle}>
          <i className={`fas fa-chevron-${arrowDirection}`}></i>
        </button>
      </div>
      <div className="expand__content">{isVisible ? children : null}</div>
    </div>
  );
};
export default Expand;
