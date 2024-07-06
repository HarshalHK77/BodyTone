import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../css/Navbar.css"
import logo from "../images/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClick = () => {
    if (isMenuOpen) {
      togglerClick();
    }
  };


  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <nav className="site-navbar">
            <a href="" className="site-logo">
              <img src={logo} alt="logo" />
              <h1>BodyTone</h1>
            </a>

            <ul className={isMenuOpen ? 'open' : ''}>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/">Home</Link></a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/about">About Us</Link> </a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/gallery">Gallery</Link> </a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/schedule">Schedule</Link> </a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/pricing">Pricing</Link> </a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/classes">Classes</Link> </a></li>
              <li><a href="#" onClick={navLinkClick}> <Link className='nav-items' to="/contact">Contact Us</Link> </a></li>
            </ul>className='nav-items' 

            <button className={`nav-toggler ${isMenuOpen ? 'toggler-open' : ''}`} onClick={togglerClick}>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
