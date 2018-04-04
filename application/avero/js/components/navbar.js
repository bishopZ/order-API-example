
import React from 'react';
import {Link} from 'react-router-dom';

var Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <hr />
    </div>
  );
};

module.exports = Navbar;
