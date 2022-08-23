import React from 'react';
import User from './User';
import './index.scss';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null,
    };
  }

  toggleSorting = () => {
    const newSorting = this.state.sort === 'asc' ? 'desc' : 'asc';
    this.setState({
      sort: newSorting,
    });
  };

  render() {
    let sortUsers;
    if (this.state.sort) {
      sortUsers = this.props.users
        .slice()
        .sort((a, b) => (this.state.sort === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      sortUsers = this.props.users;
    }

    return (
      <div>
        <button onClick={this.toggleSorting} className="btn">
          {this.state.sort || '-'}
        </button>
        <ul className="users">
          {sortUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
