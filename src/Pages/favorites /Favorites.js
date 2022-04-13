import React from 'react';
import './Favorites.css';

function Favorites() {
  const colors = localStorage.getItem('colors') ? JSON.parse(localStorage.getItem('colors')) : [];
  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      <div className="favorites-list">
        {colors.length ? colors.map((color) => (
          <div className="favorites-item" key={color} style={{ backgroundColor: color }}>{color}</div>
        )) : <p>You have not favorited any color yet </p>}
      </div>
    </div>
  );
}

export default Favorites;
