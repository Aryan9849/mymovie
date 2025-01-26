import React from 'react';
import './Navbar.css';
import {Link, NavLink, useNavigate}  from 'react-router-dom'


const Navbar = (props) => {
  const navigate =useNavigate()
  const onImageClick =(ev) => {
    // ev.praventDefault()
    navigate("/")

  }
  return (
    <div className="navbar bg-black h-15">
      <img onClick={onImageClick} src="/reactMovie_logo.png" alt="Left Logo" />
      <div className='nav-items'>
      <li><Link to="/" className="hover:text-gray-300">Home </Link></li>
      <li><Link to="/about" className="hover:text-gray-300">About </Link></li>
      <li><Link to="/contact" className="hover:text-gray-300">Contact </Link></li>
      </div>
      <img src="/react-right_logo.png" alt="Right Logo" />
      
    </div>
  );
}

export default Navbar;
