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
    let value;
    if (e.target.textContent === 'Off') {
      value = 'On';
    } else value = 'Off';
    this.setState({
      status: value,
    });
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
