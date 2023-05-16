import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
    state = {
        number: 1,
      };

       handleClick = e => { 
        this.setState(prevState => {
            return {number: prevState.number + 1}; 
        }); 
        this.props.onClick(this.state.number + 1); 
      };

  render () {
    return (
        <button type="button" className={css.button} onClick={this.handleClick}>
          Load more        
        </button>
    )
  }
};
  
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;