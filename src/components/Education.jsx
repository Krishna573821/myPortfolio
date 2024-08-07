import React from "react";
import "./Education.css";

const Education = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Amity University, Lucknow",
      duration: "2023-2025"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University, Lucknow",
      duration: "2020-2023"
    }
  ];

  return (
    <section className="education">
      <h2 className="education-heading">Education</h2>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
