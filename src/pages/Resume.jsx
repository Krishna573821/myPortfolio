import React from 'react';
import './Resume.css';
import ResumePDF from '../assets/pdf/Krishna_Kumar_Yadav_Resume.pdf'; 

const Resume = () => {
  return (<div className='resume-main'>
  <div className="resume-container">
      <div className="resume-header">
        <h1>Krishna Kumar Yadav</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="resume-contact">
        <p>Phone: 8604712704</p>
        <p>Email: <a href="mailto:krishna573821@gmail.com">krishna573821@gmail.com</a></p>
        <p>Address: Lucknow, Uttar Pradesh, PC: 226002</p>
      </div>
      <div className="resume-section">
        <h3>Language</h3>
        <p>English, Hindi</p>
      </div>
      <div className="resume-section">
        <h3>Technical Skills</h3>
        <p>HTML, CSS, JavaScript, React (currently learning)</p>
      </div>
      <div className="resume-section">
        <h3>Soft Skills</h3>
        <p>Honest, Productive, Respectful, Team Oriented, Reliable</p>
      </div>
      <div className="resume-section">
        <h3>About Me</h3>
        <p>
          I am a hardworking, honest, and sincere person with a solid background in web development. My qualifications and experience are detailed in my resume. If given a chance, I am confident I will be a valuable asset to your company. I am dedicated to meeting job requirements to your satisfaction and will be grateful for your favorable consideration of my application.
        </p>
      </div>
      <div className="resume-section">
        <h3>Education</h3>
        <p>
          <strong>Amity University Lucknow</strong><br />
          Master of Computer Applications (MCA)<br />
          2023 - 2025<br />
          CGPA (Semester 2): 8.70
        </p>
        <p>
          <strong>Amity University Lucknow</strong><br />
          Bachelor of Computer Applications (BCA)<br />
          2020 - 2023<br />
          CGPA: 8.11
        </p>
      </div>
      <div className="resume-section">
        <h3>Projects</h3>
        <p>
          <strong>Hypermart Management/Billing System</strong><br />
          Language/Technology Used: C++<br />
          Developed software to manage various operations at a hypermart, including adding, updating, viewing products, and generating bills.
        </p>
        <p>
          <strong>Ecommerce Website</strong><br />
          Language/Technology Used: HTML, CSS, JavaScript<br />
          Created a comprehensive e-commerce platform with a user-friendly interface.
        </p>
      </div>
      <div className="resume-section">
        <h3>Experience</h3>
        <p>Currently Fresher</p>
      </div>
      <a href={ResumePDF} download className="download-button">Download Resume</a>
    </div>
  </div>
    
  );
};

export default Resume;
