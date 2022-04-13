import React, { useState } from 'react';
import './Actions.css';
import PropTypes from 'prop-types';
import Button from '../UI';

function Actions(props) {
  const { color } = props;
  const [error, setError] = useState('');
  const copy = () => {
    navigator.clipboard.writeText(color);
  };
  const saveToFavorite = () => {
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    const isInclude = colors.includes(color);
    if (!isInclude) {
      colors.push(color);
      localStorage.setItem('colors', JSON.stringify(colors));
    } else {
      setError('user already added this color');
    }
  };
  return (
    <>
      <input type="text" value={color} />
      <Button onClick={saveToFavorite}>add To fav</Button>
      <Button onClick={copy}>copy</Button>
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
}
Actions.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Actions;
