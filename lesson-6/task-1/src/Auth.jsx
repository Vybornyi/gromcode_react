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
    console.log(this.state.isLoggedIn);
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
    console.log(this.state.isLoggedIn);
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
