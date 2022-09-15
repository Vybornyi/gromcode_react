import React from 'react';
import './index.scss';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  sliceUserList = () => {
    const { currentPage, itemsPerPage } = this.state;
    const to = currentPage * itemsPerPage;
    const from = to - itemsPerPage;
    return this.props.users.slice(from, to);
  };

  handlerPrevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  handlerNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { users } = this.props;
    const userList = this.sliceUserList();

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.handlerPrevPage}
          goNext={this.handlerNextPage}
          totalItems={users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {userList.map(({ name, age, id }) => (
            <User name={name} age={age} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
