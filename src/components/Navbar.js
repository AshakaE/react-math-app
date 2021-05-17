import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  </div>
);

export default Navbar;
