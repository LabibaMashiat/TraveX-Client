import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-pink-200 h-32">
  <div className="navbar-start">
    
    <Link to='/' className="btn btn-ghost normal-case text-xl text-black font-bold">TraveX</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link className='text-black font-semi-bold' to='/'>Home</Link></li>
      <li><Link className='text-black font-semi-bold' to='/blogs'>Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn btn-success mx-4">Sign in</Link>
    <Link to='/signUp' className="btn btn-primary">Sign up</Link>
  </div>
</div>
    );
};

export default Header;