import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        <Link to="https://wa.me/8604712704" target="_blank">
          <button className="whatsapp">
            <FaWhatsapp />
          </button>
        </Link>
          <Link to="mailto:krishna573821@gmail.com" target="_blank" >
          <button className="gmail">
            <SiGmail />
          </button>
        </Link> 
        </div>
        <div className="footer-contact">
          <p><MdLocalPhone /> 8604712704</p>
          <p><FaLocationDot /> Lucknow, Uttar Pradesh, India</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Krishna Kumar Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
