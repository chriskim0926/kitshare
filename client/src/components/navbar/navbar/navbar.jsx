import React from 'react';
import 'materialize-css';

const navbar = () => {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">KitShare</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><a href="/owner">Reastraunt Owner</a></li>
        <li><a href="/">Search Reastraunt</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default navbar;