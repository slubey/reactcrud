import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Items
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/doglist"
    >
      List
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/dogpost"
    >
      Create
    </NavLink>
  </nav>
);

export default Navbar;