import React from 'react';
import './index.scss';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  showColorText = color => {
    this.setState({
      color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseEnter={() => this.showColorText('Coral')}
            onMouseLeave={() => this.showColorText('')}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.showColorText('Aqua')}
            onMouseLeave={() => this.showColorText('')}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.showColorText('Bisque')}
            onMouseLeave={() => this.showColorText('')}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
