import React from "react";
import "./Resume.css";
import ResumePDF from "../assets/pdf/Krishna_Kumar_Yadav_Resume.pdf";

const Resume = () => {
   return (
      <div className="resume-main">
         <div className="resume-container">
            <div className="resume-header">
               <h1>KRISHNA KUMAR YADAV</h1>
               <h2>Software Developer</h2>
            </div>
            <div className="resume-contact">
               <p>Mob: 8604712704</p>
               <p>
                  Email: <a href="mailto:krishna573821@gmail.com">krishna573821@gmail.com</a>
               </p>
               <p>Location: Lucknow, Uttar Pradesh, India</p>
            </div>
            <div className="resume-section">
               <h3>About Me</h3>
               <p>
                  A passionate frontend developer with strong foundational skills in the MERN stack and a demonstrated ability to build responsive and interactive web applications. I am dedicated, detail-oriented, and eager to leverage my skills to contribute to a dynamic team environment. Seeking opportunities to grow as a developer and contribute meaningfully to impactful projects.
               </p>
            </div>
            <div className="resume-section">
               <h3>Technical Skills</h3>
               <ul style={{"listStyleType":"none"}}>
                  <li>Programming Languages: C, C++</li>
                  <li>Frontend Development: HTML, CSS, JavaScript, React, GSAP</li>
                  <li>Backend & Database (Basic Knowledge): MongoDB, Express, MySQL</li>
                  <li>Additional Tools & Libraries: Version control with Git</li>
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
                  <strong>Bachelor of Computer Applications (BCA)</strong> <br />
                  2020 – 2023 <br />
                  Amity University, Lucknow
               </p>
            </div>
            <div className="resume-section">
               <h3>Projects</h3>
               <p>
                  <strong>Hypermart Management/Billing System</strong> <br />
                  Tech Stack: C++ <br />
                  Developed a software application to streamline hypermart operations, including inventory management, billing, and customer records. This project enhanced my problem-solving skills in a real-world setting and solidified my understanding of object-oriented programming in C++.
               </p>
               <p>
                  <strong>Ecommerce Website</strong> <br />
                  Tech Stack: HTML, CSS, JavaScript <br />
                  Designed and implemented a fully functional e-commerce platform. Key features include a product catalog, shopping cart, and filters with a user-friendly interface that prioritizes customer experience. Developed responsive layouts to ensure seamless navigation across devices.
               </p>
               <p>
                  <strong>Job Portal</strong> <br />
                  Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB <br />
                  Developed a job portal featuring a user-friendly seeker dashboard with job listings and advanced filters. Integrated profile management and API handling to streamline functionality. This project enhanced my proficiency in the MERN stack and reinforced my understanding of building full-stack web applications.
               </p>
            </div>
            <div className="resume-section">
               <h3>Certificates/Achievements</h3>
               <p>Google Cybersecurity Certificate</p>
            </div>
            <div className="resume-section">
               <h3>Soft Skills</h3>
               <ul style={{"listStyleType":"none"}}>
                  <li>Honest</li>
                  <li>Team Oriented</li>
                  <li>Quick Learner</li>
                  <li>Respectful</li>
                  <li>Reliable</li>
                  <li>Adaptable</li>
                  <li>Productive</li>
               </ul>
            </div>
            <a href={ResumePDF} download className="download-button">
               Download Resume
            </a>
         </div>
      </div>
   );
};

export default Resume;
