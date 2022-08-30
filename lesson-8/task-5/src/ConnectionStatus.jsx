import React from 'react';
import './index.scss';

export default class ConnectionStatus extends React.Component {
  state = {
    status: 'Online',
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
      status: navigator.onLine ? 'Online' : 'Offline',
    });
  };

  render() {
    return (
      <div
        className={
          this.state.status === 'Online' ? 'status status_online' : 'status status_offline'
        }
      >
        {this.state.status}
      </div>
    );
  }
}
