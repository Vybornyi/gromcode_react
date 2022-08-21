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
    if (e.target.textContent === 'On') {
      value = 'Off';
    } else value = 'On';
    this.setState({
      status: value,
    });
  };

  render() {
    return (
      <div onClick={this.changeStatus} className="toggler">
        {this.state.status}
      </div>
    );
  }
}

export default Toogler;
