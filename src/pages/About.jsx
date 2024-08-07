import React from 'react';
import './About.css';
import AboutImage from '../assets/images/Photo.webp'; 
const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        I am a hardworking, honest, and sincere individual with a solid background in web development. With a strong foundation in HTML, CSS, and JavaScript, I am passionate about creating dynamic and responsive web applications. Currently, I am expanding my skills by learning React, which I believe will further enhance my ability to build modern and efficient web solutions. My education includes a Bachelor's degree in Computer Applications and I am currently pursuing a Master's degree in Computer Applications. I am dedicated to continually improving my technical skills and delivering high-quality work. If given the opportunity, I am confident that I will be a valuable asset to any team and meet the job requirements to your satisfaction.
        </p>
      </div>
      <div className="about-image">
        <img src={AboutImage} alt="About Me" />
      </div>
    </div>
  );
};

export default About;
