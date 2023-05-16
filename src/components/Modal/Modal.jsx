import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  
  onBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  };

  render () {

    return (
        <div className={css.overlay} onClick={this.onBackdropClose}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt={this.props.id} />
        </div>
      </div>
    );
  };
};
  
Modal.propTypes = {
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Modal;