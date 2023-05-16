import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {

  onCloseModal = () => this.props.onClick();

  render () {
    {document.addEventListener("keydown", ({code}) => {
      code === 'Escape' && this.onCloseModal();
    })};

    return (
        <div className={css.overlay} onClick={this.onCloseModal}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt={this.props.id}/>
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