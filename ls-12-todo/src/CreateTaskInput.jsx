import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    inputText: '',
  };

  handleChange = e => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handleClick = () => {
    this.props.onCreate(this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleClick}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;
