import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="flex justify-between px-28 mt-10 mb-16">
    <div>
      <h1 className="text-4xl font-medium uppercase">Math Magicians</h1>
    </div>
    <div className="text-2xl flex w-96 justify-between underline text-blue-700">
      <Link className="hover:text-blue-400 duration-150" to="/">Home </Link>
      <Link className="hover:text-blue-400 duration-150" to="/calculator">Calculator </Link>
      <Link className="hover:text-blue-400 duration-150" to="/quote">Quote </Link>
    </div>
  </div>
);

export default Navbar;
