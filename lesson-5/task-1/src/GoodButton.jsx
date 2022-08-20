import React from 'react';
import './index.scss';

const GoodButton = () => (
  <button
    className="fancy-button"
    onClick={() => {
      alert('Good job!');
    }}
  >
    Click Me
  </button>
);
export default GoodButton;
