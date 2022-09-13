import React from 'react';
import PropTypes from 'prop-types';

export default class Dialog extends React.Component {
  render() {
    const { children, title, isOpen, onClose } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button className="dialog__close-btn" onClick={onClose}>
            +
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    );
  }
}
Dialog.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  title: '',
  isOpen: false,
};
