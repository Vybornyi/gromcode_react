import React from 'react';
import './index.scss';

class GoodButton extends React.Component {
  buttonCklick() {
    alert('sf');
  }

  render() {
    return (
      <button className="fancy-button" onClick={buttonCklick}>
        Click Me
      </button>
    );
  }
}

export default GoodButton;
