import React from 'react';
import 'materialize-css';
import {  NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
    <div class="nav-wrapper">
      <NavLink to="/" class="brand-logo">KitShare</NavLink>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink to="/owner">Reastraunt Owner</NavLink></li>
        <li><NavLink to="/">Search Reastraunt</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </div>
  </nav>
  );
};

export default navbar;