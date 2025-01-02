import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Career Guidance</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/questionnaire">Questionnaire</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
