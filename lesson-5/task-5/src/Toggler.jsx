import React from 'react';
import './index.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }

  changeStatus = () => {
    this.setState({
      status: this.state.status === 'Off' ? 'On' : 'Off',
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

export default Toggler;
