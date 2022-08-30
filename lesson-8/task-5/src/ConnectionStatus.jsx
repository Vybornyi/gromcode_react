import React from 'react';
import './index.scss';

export default class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener('offline', this.updateStatus);
  }

  updateStatus = () => {
    this.setState({
      status: this.state.status === 'online' ? 'offline' : 'online',
    });
  };

  render() {
    return (
      <div
        className={
          this.state.status === 'online' ? 'status status_online' : 'status status_offline'
        }
      >
        {this.state.status}
      </div>
    );
  }
}
