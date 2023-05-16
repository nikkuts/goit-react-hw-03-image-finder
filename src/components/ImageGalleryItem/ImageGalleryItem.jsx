import React, { Component } from "react";
import PropTypes from 'prop-types';
import Modal from "components/Modal/Modal";
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {

  state = {
    isModalOpen: false,
  };

openModal = () => this.setState({isModalOpen: true});
closeModal = () => this.setState({isModalOpen: false});

  render () {
    return (
      <li className={css.item} key={this.props.id}>
        <img src={this.props.webformatURL} alt={this.props.id} 
        className={css.itemImage} onClick={this.openModal} />
        
        { this.state.isModalOpen && <Modal
        id={this.props.id}
        largeImageURL={this.props.largeImageURL}
        onClick={this.closeModal}
        />}  
      </li>
    )
  }
};
  
ImageGalleryItem.propTypes = {
  key: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;