import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tender Shoots</h2>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/paint" className="navbar-link">
            Paint
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/favorites" className="navbar-link">
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
