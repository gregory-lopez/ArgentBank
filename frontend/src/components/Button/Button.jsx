import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, type = 'button', onClick, className }) => {
  return (
    <button className={`generic-button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
