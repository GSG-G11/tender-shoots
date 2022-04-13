import React from 'react';
import './Favorites.css';

function Favorites() {
  const colors = localStorage.getItem('colors') ? JSON.parse(localStorage.getItem('colors')) : [];
  const copy = (color) => {
    navigator.clipboard.writeText(color);
  };
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {colors.length ? colors.map((color) => (
          <button type="button" title="Click here to copy" className="favorites-item" key={color} style={{ backgroundColor: color }} onClick={() => copy(color)}>{color}</button>
        )) : <p>You have not favorited any color yet </p>}
      </div>
    </div>
  );
}

export default Favorites;
