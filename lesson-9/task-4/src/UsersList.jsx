import React from 'react';
import './index.scss';
import Filter from './Filter';
import User from './User';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      inputText: '',
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      inputText: value,
    });
  };

  filterUsers = () =>
    this.state.users.filter(user =>
      user.name.toLowerCase().includes(this.state.inputText.toLowerCase()),
    );

  render() {
    const userList = this.state.inputText ? this.filterUsers(this.state.users) : this.state.users;
    const numOfUsers = userList.length;

    return (
      <div>
        <Filter filterText={this.inputText} onChange={this.handleChange} count={numOfUsers} />

        <ul className="users">
          {userList.map(user => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}
