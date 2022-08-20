import React from 'react';
import './index.scss';

class GoodButton extends React.Component {
  buttonClick(e) {
    alert(e.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.buttonClick}>
        Click Me
      </button>
    );
  }
}

export default GoodButton;
