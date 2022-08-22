import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.isOnline,
    };
  }

  render() {
    return <div className="status">{this.state.status ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
