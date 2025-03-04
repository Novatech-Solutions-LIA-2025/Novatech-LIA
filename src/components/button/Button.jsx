import React from 'react';
import PropTypes from 'prop-types';
import "./button.css";

function Button({ label, onClick, type = "button", variant = "primary", disabled = false }) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    
  );

}
  Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit"]),
    variant: PropTypes.oneOf(["primary", "secondary", "alternative"]),
    disabled: PropTypes.bool,
  };

export default Button;