import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logo, links }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="logo" />
    </div>
    <ul className="navbar-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
