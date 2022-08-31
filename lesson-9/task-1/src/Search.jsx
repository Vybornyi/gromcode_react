import React from 'react';
import './index.scss';

export default class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    // event.persist();
    const { value } = event.target;
    this.setState({
      value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
