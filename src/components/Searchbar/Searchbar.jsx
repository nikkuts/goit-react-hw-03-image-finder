import React, { Component } from "react";
import PropTypes from 'prop-types';
import {ImSearch} from 'react-icons/im'; 
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  
  handleChange = e => {
    this.setState({query: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    
    if (this.state.query.trim() === '') {
      alert('Enter a search word');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({query: ''}); 
  };

  render () {
    return (
        <header className={css.searchbar} onSubmit={this.handleSubmit}>
            <form className={css.searchForm}>
                <button type="submit" className={css.button}>
                  <ImSearch />
                <span className={css.buttonLabel}>Search</span>
                </button>

                <input
                className={css.input}
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                />
            </form>
        </header>
        );
  };
};
  
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;