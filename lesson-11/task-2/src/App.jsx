import React from 'react';
import Dialog from './Dialog';
import './index.scss';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const childElem = (
      <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
    );
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} title="Recommendation" onClose={this.hideDialog}>
          {childElem}
        </Dialog>
      </div>
    );
  }
}
export default App;
