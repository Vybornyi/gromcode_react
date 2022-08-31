import React from 'react';
import './index.scss';

export default class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount = () => {
    window.addEventListener('online', this.updateStatusOnline);
    window.addEventListener('offline', this.updateStatusOffline);
  };

  componentWillUnmount = () => {
    window.removeEventListener('online', this.updateStatusOnline);
    window.removeEventListener('offline', this.updateStatusOffline);
  };

  updateStatusOnline = () => {
    this.setState({
      status: 'online',
    });
    console.log(this.state.status);
  };

  updateStatusOffline = () => {
    this.setState({
      status: 'offline',
    });
    console.log(this.state.status);
  };

  render() {
    return (
      <div className={this.state.status === 'online' ? 'status ' : 'status status_offline'}>
        {this.state.status}
      </div>
    );
  }
}
