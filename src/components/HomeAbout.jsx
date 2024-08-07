import React from "react";
import "./HomeAbout.css";
import Img from "../assets/images/Photo.webp";

const HomeAbout = ({ className }) => {
  return (
    <div className={`home-about-container ${className}`}>
      <h1 className="about-heading">About Me</h1>

      <div className="flex-container">
        <div className="about-para">
          <div className="quotes q-top">
            <h1>"</h1>
          </div>
          <div className="quotes q-bottom">
            <h1>"</h1>
          </div>
          <p>
            I am a passionate Frontend Developer with a love for creating
            intuitive and dynamic web experiences. With a strong foundation in
            HTML, CSS, and JavaScript, I am dedicated to bringing creative ideas
            to life and solving complex problems. When I am not coding, I enjoy
            exploring new technologies and working on personal projects to
            continually improve my skills.
          </p>
        </div>
        <div className="image-container">
          <img src={Img} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
