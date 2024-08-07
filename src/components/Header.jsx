import React from 'react'
import "./Header.css"
import Logo from '../assets/images/logo.webp'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
    <div id="nav">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menuItems">
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/about"><h4>About Me</h4></Link>
        <Link to="/resume"><h4>Resume</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
      </div>
    </div>
    </>
  )
}

export default Header