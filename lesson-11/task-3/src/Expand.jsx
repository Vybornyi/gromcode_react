import React from 'react';

class Expand extends React.Component {
  state = {
    isVisible: false,
  };

  toogleContent = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const arrowDirection = this.state.isVisible ? 'up' : 'down';
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toogleContent}>
            <i className={`fas fa-chevron-${arrowDirection}`}></i>
          </button>
        </div>
        <div className="expand__content">{this.state.isVisible ? this.props.children : null}</div>
      </div>
    );
  }
}

export default Expand;
