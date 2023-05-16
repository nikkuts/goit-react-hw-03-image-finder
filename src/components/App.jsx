import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import css from './App.module.css';

class App extends Component {
  state = {
    query: '',
    number: 1,
  };

handleFormSubmit = query => {
  this.setState({query});
};

handleButtonClick = number => {
  this.setState({number});
};

  render () {
    const {query, number} = this.state;
    return (
      <div className={css.app}>
        <Searchbar 
        onSubmit={this.handleFormSubmit}
        />
        <ImageGallery 
        query={query}
        number={number}
        />
        {query !== '' && 
        <Button 
        onClick={this.handleButtonClick}
        />}
      </div>
    );
  }
};

export default App;