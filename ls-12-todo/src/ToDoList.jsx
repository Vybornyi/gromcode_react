import React from 'react';

import TasksList from './TasksList';

class ToDoList extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <TasksList />
        </main>
      </>
    );
  }
}

export default ToDoList;
