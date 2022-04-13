import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, onClick, color } = props;

  return (
    <button type="button" className="button" onClick={onClick} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
