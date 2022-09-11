import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, changeStatusTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = text => {
    const task = {
      text,
      done: false,
    };
    createTask(task).then(() => {
      this.fetchTasks();
    });
  };

  handleChangeTaskStatus = taskId => {
    const { done, text } = this.state.tasks.find(task => task.id === taskId);
    const updateTask = {
      done: !done,
      text,
    };
    changeStatusTask(updateTask, taskId).then(() => this.fetchTasks());
  };

  handleDeleteTask = taskId => {
    deleteTask(taskId).then(() => this.fetchTasks());
  };

  render() {
    const sortTasks = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortTasks.map(task => (
            <Task
              key={task.id}
              handleChange={this.handleChangeTaskStatus}
              {...task}
              handleDelete={this.handleDeleteTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TasksList;
