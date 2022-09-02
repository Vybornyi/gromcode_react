import React from 'react';
import './index.scss';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

export default class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });
  }

  render() {
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user} />
        </header>

        <UserProfile userData={this.state.user} />
      </div>
    );
  }
}
