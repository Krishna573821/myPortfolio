import React from "react";
import "./Resume.css";
import ResumePDF from "../assets/pdf/Krishna_Kumar_Yadav_Resume.pdf";

const Resume = () => {
   return (
      <div className="resume-main">
         <div className="resume-container">
            <div className="resume-header">
               <h1>KRISHNA KUMAR YADAV</h1>
               <h2>Frontend Developer</h2>
            </div>
            <div className="resume-contact">
               <p>Mob: 8604712704</p>
               <p>
                  Email:{" "}
                  <a href="mailto:krishna573821@gmail.com">
                     krishna573821@gmail.com
                  </a>
               </p>
            </div>
            <div className="resume-section">
               <h3>About Me</h3>
               <p>
                  I am a dedicated and sincere individual with a passion for
                  front-end development and a solid grasp of the basics of the
                  MERN stack. I am confident in my ability to contribute
                  effectively and would be grateful for the opportunity to prove
                  myself as a valuable asset to your team.
               </p>
            </div>
            <div className="resume-section">
               <h3>Technical Skills</h3>
               <ul style={{"list-style-type":"none"}}>
                  <li>C</li>
                  <li>C++</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>GSAP</li>
                  <li>React</li>
               </ul>
            </div>
            <div className="resume-section">
               <h3>Education</h3>
               <p>
                  <strong>Master of Computer Applications (MCA)</strong> <br />
                  2023 – 2025 <br />
                  Amity University, Lucknow
               </p>
               <p>
                  <strong>Bachelor of Computer Applications (BCA)</strong>{" "}
                  <br />
                  2020 – 2023 <br />
                  Amity University, Lucknow
               </p>
            </div>
            <div className="resume-section">
               <h3>Projects</h3>
               <p>
                  <strong>Hypermart Management/Billing System</strong> <br />
                  Language/Technology Used: C++ <br />
                  Developed software to manage various operations at a
                  hypermart, including adding, updating, viewing products, and
                  generating bills.
               </p>
               <p>
                  <strong>Ecommerce Website</strong> <br />
                  Language/Technology Used: HTML, CSS, JavaScript <br />
                  Created an e-commerce platform with a user-friendly interface.
               </p>
               <p>
                  <strong>Portfolio Website</strong> <br />
                  Language/Technology Used: HTML, CSS, JavaScript, React <br />
                  Created a portfolio website for myself.
               </p>
            </div>
            <div className="resume-section">
               <h3>Soft Skills</h3>
               <ul style={{"list-style-type":"none"}}>
                  <li>Honest</li>
                  <li>Productive</li>
                  <li>Respectful</li>
                  <li>Team Oriented</li>
                  <li>Reliable</li>
                  <li>Adaptable</li>
               </ul>
            </div>
            <div className="resume-section">
               <h3>Interests</h3>
               <p>Playing Cricket and Listening to Music</p>
            </div>
            <a href={ResumePDF} download className="download-button">
               Download Resume
            </a>
         </div>
      </div>
   );
};

export default Resume;
