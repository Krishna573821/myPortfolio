import React, { useState } from 'react';
import "./Header.css";
import Logo from '../assets/images/logo.webp';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div id="nav">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`menuItems ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}><h4>Home</h4></Link>
          <Link to="/about" onClick={toggleMobileMenu}><h4>About Me</h4></Link>
          <Link to="/resume" onClick={toggleMobileMenu}><h4>Resume</h4></Link>
          <Link to="/contact" onClick={toggleMobileMenu}><h4>Contact</h4></Link>
        </div>
        <div className="menuIcon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </>
  );
};

export default Header;
