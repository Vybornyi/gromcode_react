import React from 'react';
import './index.scss';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isVisible: false,
  };

  toogleContent = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const childrenElem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand onToogle={this.toogleContent} isVisible={this.state.isVisible} title="Some title">
          {childrenElem}
        </Expand>
      </div>
    );
  }
}

export default App;
