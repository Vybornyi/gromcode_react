import React from 'react';
import './index.scss';

class Toogler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }

  changeStatus = e => {
    if (e.target.textContent === 'Off') {
      e.target.textContent = 'On';
    } else if (e.target.textContent === 'On') {
      e.target.textContent = 'Off';
    }
  };

  render() {
    return (
      <button onClick={this.changeStatus} className="toggler">
        {this.state.status}
      </button>
    );
  }
}

export default Toogler;
