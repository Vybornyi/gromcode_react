import React from 'react';
import './index.scss';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

export default class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userData,
        });
      });
  }

  render() {
    if (!this.state.userData) {
      return null;
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>

        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}
