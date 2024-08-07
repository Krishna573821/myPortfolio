import React from "react";
import "./Socials.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <div className="social-icons">
        <Link to="https://github.com/Krishna573821" target="_blank" >
          <button className="github">
            <FaGithub />
          </button>
        </Link>
        <Link to="mailto:krishna573821@gmail.com" target="_blank" >
          <button className="gmail">
            <SiGmail />
          </button>
        </Link>
        <Link to="https://leetcode.com/u/Krishna-_/" target="_b;ank">
          <button className="leetcode">
            <SiLeetcode />
          </button>
        </Link>
        <Link to="https://wa.me/8604712704" target="_blank">
          <button className="whatsapp">
            <FaWhatsapp />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Socials;
