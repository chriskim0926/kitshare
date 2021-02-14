import React from 'react';
import 'materialize-css';
import {  NavLink } from "react-router-dom";
import './navbar.css';
// import LoginButton from "../../LoginButton/loginButton"

const navbar = () => {
  return (
    <nav id  = "navbar">
    <div class="nav-wrapper">
      <NavLink to="/" className="brand-logo">KitShare</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/owner">Restaurant Owner</NavLink></li>
        <li><NavLink to="/listings">Search Restaurant</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li> <NavLink to="/"  id="signin">Sign In</NavLink></li>
        <li> <NavLink to="/signup"  id="signup">Sign Up</NavLink></li>
      </ul>

    </div>
  </nav>
  );
};

export default navbar;