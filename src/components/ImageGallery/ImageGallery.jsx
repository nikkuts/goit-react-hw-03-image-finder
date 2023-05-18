import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Circles } from  'react-loader-spinner';
import fetchFoto from "servise/api";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const {query, number} = this.props;

    if (prevProps.query !== query) {
      this.setState({ isLoading: true });

      try {
        const {data} = await fetchFoto(query, 1);

        if (data.hits.length === 0) {
          alert("Sorry, there are no images matching your search query. Please try again.");
        return;
        }
        this.setState( {images: data.hits} ); 
      } 
      catch (error) {
        alert("ERROR Sorry, there are no images matching your search query. Please try again."); 
        this.setState({ error });
      } 
      finally {
        this.setState({ isLoading: false });
      }
    }
    else if (prevProps.number !== number) {
      this.setState({ isLoading: true });

      try {
        const {data} = await fetchFoto(query, number);

        if (number * 12 > data.totalHits) {
          alert("We're sorry, but you've reached the end of search results.");
          return;   
      }
        this.setState( {images: [...this.state.images, ...data.hits]} ); 
      } 
      catch (error) {
        alert("ERROR Sorry, there are no images matching your search query. Please try again."); 
        this.setState({ error });
      } 
      finally {
        this.setState({ isLoading: false });
      }
    };
  };

  render () {
    const {images, isLoading} = this.state;
    
    return (
      <div>
        {isLoading && <Circles/>}
      
      <ul className={css.imageGallery}>
      {images.map(({id, webformatURL, largeImageURL}) => (
      
      <ImageGalleryItem
      id={id}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
      />
      
      ))}
      </ul>
      </div>
    );
  }
};

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };

export default ImageGallery;