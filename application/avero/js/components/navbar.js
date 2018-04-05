
import React from 'react';
import { Link } from 'react-router-dom';

var Navbar = ()=>(
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
    <hr />
  </nav>
);

module.exports = Navbar;
