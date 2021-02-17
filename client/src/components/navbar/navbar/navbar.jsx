import React from 'react';
import 'materialize-css';
import {  NavLink } from "react-router-dom";
import './navbar.css';
// import LoginButton from "../../LoginButton/loginButton"

const navbar = () => {
  return (
    <nav id  = "navbar">
    {/* <div class="nav-wrapper">
      <NavLink to="/" className="brand-logo">KitShare</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/owner">Restaurant Owner</NavLink></li>
        <li><NavLink to="/listings">Search Restaurant</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li> <NavLink to="/"  id="signin">Sign In</NavLink></li>
        <li> <NavLink to="/signup"  id="signup">Sign Up</NavLink></li>
      </ul>

    </div> */}
    <div className="w3-top">
  <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing:"4px"}}>
    <NavLink to="/" class="w3-bar-item w3-button">KitShare</NavLink>
    <div className="w3-right w3-hide-small">
      <NavLink to="/owner" className="w3-button">Restaurant Owner</NavLink>
      <NavLink to="/listings" className="w3-button">Search Restaurant</NavLink>
      <NavLink to="/about" className="w3-button">About Us</NavLink>
      <NavLink to="/contact" className="w3-button">Contact Us</NavLink>
      <NavLink to="/signin" className="w3-button">Sign In</NavLink>
      <NavLink to="/signup" className="w3-button">Sign Up</NavLink>
    </div>
  </div>
</div>
  </nav>
  );
};

export default navbar;