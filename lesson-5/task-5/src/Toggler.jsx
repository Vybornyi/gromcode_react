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
    console.log(e.target.textContent);
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
      <div onClick={this.changeStatus} className="toggler">
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
