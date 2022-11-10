import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <Link to='/' className="btn btn-ghost normal-case text-xl">TraveX</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn btn-success mx-4">Sign in</Link>
    <Link className="btn btn-primary">Sign up</Link>
  </div>
</div>
    );
};

export default Header;