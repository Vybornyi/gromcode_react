import React from 'react';
import Greeting from './Greeting';
import './index.scss';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
