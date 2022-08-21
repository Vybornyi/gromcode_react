import React from 'react';
import './index.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }

  changeStatus = e => {
    if (e.target.textContent === 'On') {
      this.setState({
        status: 'Off',
      });
    } else if (e.target.textContent === 'Off') {
      this.setState({
        status: 'On',
      });
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

export default Toggler;
