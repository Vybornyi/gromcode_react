import React from 'react';

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.random().toFixed(2) * 100,
    };
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(' shouldComponentUpdate(nextProps, nextState):decide to render or not to render');
    return nextState.number > 50;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will removed ');
  }

  tooggleStatus = () => {
    this.setState({
      number: Math.random().toFixed(2) * 100,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.number}</div>
        <button onClick={this.tooggleStatus}>PUSH</button>
      </>
    );
  }
}
