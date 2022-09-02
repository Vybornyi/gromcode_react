import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'loggedOut',
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: 'Spinner',
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: 'loggedIn',
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: 'loggedOut',
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn === 'loggedOut' && <Login onLogin={this.handleLogin} />}
        {this.state.isLoggedIn === 'loggedIn' && <Logout onLogout={this.handleLogout} />}
        {this.state.isLoggedIn === 'Spinner' && <Spinner size={50} />}
      </>
    );
  }
}
export default Auth;
