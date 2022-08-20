import React from 'react';
import './index.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({
      number: this.state.number - 1,
    });
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  resetCounter() {
    this.setState({
      number: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <button data-action="decrement" className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value" onClick={() => this.resetCounter()}>
          {this.state.number}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}
export default Counter;
