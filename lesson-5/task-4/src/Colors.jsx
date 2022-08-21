import React from 'react';
import './index.scss';

class Colors extends React.Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setBodyColor('#f00')}
          style={{ backgroundColor: '#f00' }}
        ></button>
        <button
          onClick={() => this.setBodyColor('#0f0')}
          style={{ backgroundColor: '#0f0' }}
        ></button>
        <button
          onClick={() => this.setBodyColor('#00f')}
          style={{ backgroundColor: '#00f' }}
        ></button>
      </div>
    );
  }
}
export default Colors;
