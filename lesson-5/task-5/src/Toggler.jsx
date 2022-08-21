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
        status: 'Off',
      });
    } else if (e.target.textContent === 'Off status here') {
      this.setState({
        status: 'On',
      });
    }
  };

  render() {
    return (
      <div onClick={this.changeStatus} className="toggler">
        {`${this.state.status} status here`}
      </div>
    );
  }
}

export default Toggler;
