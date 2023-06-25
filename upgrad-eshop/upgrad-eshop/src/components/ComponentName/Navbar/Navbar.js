// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, isAdmin }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <>
            <li className="navbar-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {isAdmin && (
              <li className="navbar-item">
                <Link to="/admin">Admin Panel</Link>
              </li>
            )}
          </>
        )}
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
