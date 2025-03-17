import React from "react";
import "./Resume.css";
import ResumePDF from "../assets/pdf/KRISHNA_KUMAR_YADAV_AMITY_UNIVERSITY_RESUME.pdf";

const Resume = () => {
   return (
      <div className="resume-main">
         <div className="resume-container">
            <div className="resume-header">
               <h1>KRISHNA KUMAR YADAV</h1>
               <h2>Software Developer</h2>
            </div>
            <div className="resume-contact">
               <p>📞 Mobile: 8604712704</p>
               <p>
                  📩 Email:{" "}
                  <a href="mailto:krishnaa.yadav.dev@gmail.com">
                     krishnaa.yadav.dev@gmail.com
                  </a>
               </p>
               <p>
                  📍 Location: Lucknow, Uttar Pradesh, India (Open to
                  Relocation)
               </p>
            </div>
            <div className="resume-section">
               <h3>Profile Summary</h3>
               <p>
                  A detail-oriented and passionate Frontend & Full Stack
                  Developer with strong skills in responsive design and web
                  application development. Proven ability to build scalable,
                  user-friendly, and interactive applications using modern
                  technologies like React, Redux Toolkit, Node.js, Express, and
                  REST API integration.
               </p>
            </div>
            <div className="resume-section">
               <h3>Experience</h3>
               <p>
                  <strong>Backend Developer Intern</strong> <br />
                  Rablo.in, Lucknow <br />
                  March 3, 2025 – Present
               </p>
            </div>
            <div className="resume-section">
               <h3>Technical Skills</h3>
               <ul style={{ listStyleType: "none" }}>
                  <li>
                     <strong>Programming Languages:</strong> C, C++
                  </li>
                  <li>
                     <strong>Frontend Development:</strong> HTML, CSS,
                     JavaScript, React, Redux Toolkit, GSAP, Responsive Design,
                     Tailwind CSS
                  </li>
                  <li>
                     <strong> Backend & Database:</strong> Node.js, Express.js,
                     MongoDB, MySQL, REST API Development
                  </li>
                  <li>
                     <strong>Full Stack Development:</strong> MERN Stack, API
                     Integration, Authentication & Authorization
                  </li>
                  <li>
                     <strong>Version Control:</strong> Git and GitHub
                  </li>
                  <li>
                     <strong>Software Architecture:</strong> High-Level Design
                     (HLD), System Design
                  </li>
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
               <h3>Certifications/Achievements</h3>
               <ul style={{ listStyleType: "none" }}>
                  <li>- Google Cybersecurity Certificate</li>
                  <li>
                     - Full Stack Web Development Training/Internship
                     Certificate
                  </li>
                  <li>
                     - Basics of Data Structures and Algorithms Certificate
                  </li>
                  <li>
                     - Full Stack Development Certificate (Advanced DSA | CS
                     Fundamentals | System Design)
                  </li>
                  <li>
                     - Introduction to Industry 4.0 and Industrial Internet of
                     Things Certificate
                  </li>
               </ul>
            </div>
            <div className="resume-section">
               <h3>Projects</h3>
               <p>
                  <strong>Hypermart Management/Billing System</strong> <br />
                  <strong>Tech Stack:</strong> C++ <br />
                  • Developed a software application to streamline hypermart
                  operations, including inventory management and billing.
                  <br />
                  • Implemented object-oriented programming (OOP) principles to
                  ensure a modular and scalable architecture.
                  <br />• Enhanced problem-solving skills by optimizing
                  real-world business operations through software solutions.
               </p>
               <p>
                  <strong>E-commerce Website</strong> <br />
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript <br />
                  • Designed and implemented a fully functional, responsive
                  e-commerce website using modern frontend development best
                  practices.
                  <br />
                  • Integrated REST APIs to fetch product data dynamically,
                  ensuring a seamless shopping experience.
                  <br />• Developed mobile-friendly and cross-browser compatible
                  layouts for enhanced user accessibility.
               </p>
               <p>
                  <strong>Job Portal</strong> <br />
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, Node.js, Express,
                  MongoDB <br />
                  • Developed a full-stack job portal using the MERN stack with
                  a responsive design tailored for job seekers as well as
                  employers, used REST API for data retrieval.
                  <br />
                  • Implemented Redux Toolkit for efficient state management and
                  improved UI responsiveness.
                  <br />• Integrated job listing filters, profile management,
                  and authentication features for enhanced functionality.
               </p>
            </div>

            <a href={ResumePDF} download className="download-button">
               Download Resume
            </a>
         </div>
      </div>
   );
};

export default Resume;
