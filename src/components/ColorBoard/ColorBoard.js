import React from 'react';
import PropTypes from 'prop-types';
import './ColorBoard.css';

function ColorBoard({
  actions: {
    color1, color2, search, setSearch,
  },
}) {
  return (
    <div className="color-board">
      <div
        className="color-container"
        style={{
          backgroundImage: `linear-gradient(${'to right'},${color2},${color1})`,
        }}
      />
      <div className="color-body">
        <p className="color-demo" style={{ color: color2 }}>
          Primary
          {' '}
        </p>
        <div className="color-action">
          <input
            className="color-input"
            type="color"
            onInput={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <p className="color-demo" style={{ color: color1 }}>
          Complementary
          {' '}
        </p>
      </div>
    </div>
  );
}
ColorBoard.propTypes = {
  actions: PropTypes.shape({
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  }).isRequired,
};

export default ColorBoard;
