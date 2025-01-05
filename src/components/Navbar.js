import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Add Employee</Link></li>
        <li><Link to="/view-employees">View Employee</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
