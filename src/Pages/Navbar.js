import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/music" className="nav-link">
            Music
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/store" className="nav-link">
            Store
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to="/misc" className="nav-link">
            Misc
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
