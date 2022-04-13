import React, { useEffect, useState } from 'react';
import './Actions.css';
import PropTypes from 'prop-types';
import { Button } from '../UI';

function Actions(props) {
  const { color } = props;

  const [isCopy, setIsCopy] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(color);
    setIsCopy(true);
  };
  const saveToFavorite = () => {
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    const isInclude = colors.includes(color);
    if (!isInclude) {
      colors.push(color);
      localStorage.setItem('colors', JSON.stringify(colors));
      setIsSave(true);
    }
  };
  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    const isInclude = colors.includes(color);
    if (!isInclude) {
      setIsSave(false);
    } else {
      setIsSave(true);
    }
    setIsCopy(false);
  }, [color]);
  return (
    <div className="action-wrapper">
      <p>{color}</p>
      <div className="btns">
        <Button onClick={copy} color={color}>
          {isCopy ? (
            <i className="fa-solid fa-check" />
          ) : (
            <i className="fa fa-copy" />
          )}
        </Button>
        <Button onClick={saveToFavorite} color={color}>
          <i className="fa-solid fa-star" style={isSave ? { color: 'yellow' } : { color: '#FFFFFF' }} />
        </Button>
      </div>
    </div>
  );
}
Actions.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Actions;
