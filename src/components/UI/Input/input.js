import React from 'react';
import PropTypes from 'prop-types';

function Input({
  onAction, type, min, max, label,
}) {
  return (
    <>
      <p>
        {label}
      </p>
      <input
        type={type}
        min={min && min}
        max={max && max}
        onChange={(e) => {
          onAction(e.target.value);
        }}
      />
    </>
  );
}
Input.propTypes = {
  onAction: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Input;
