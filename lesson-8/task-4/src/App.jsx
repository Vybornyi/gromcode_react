import React from 'react';
import Clock from './Clock';
import './index.scss';

class App extends React.Component {
  state = {
    status: false,
  };

  toogleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <>
        {this.state.status && (
          <>
            <Clock offset={0} location={'London'} />
            <Clock offset={2} location={'Kyiv'} />
            <Clock offset={-5} location={'New York'} />
          </>
        )}
        <button onClick={this.toogleStatus}>SHOW/HIDE</button>
      </>
    );
  }
}

export default App;
