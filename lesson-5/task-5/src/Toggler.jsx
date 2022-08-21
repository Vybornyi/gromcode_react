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
    if (e.target.textContent === 'On status here') {
      this.setState({
        status: 'Off status here',
      });
    } else if (e.target.textContent === 'Off' || 'Off status here') {
      this.setState({
        status: 'On status here',
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
