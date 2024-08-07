import React from "react";
import "./Project.css";

const Project = ({ projects }) => {
  return (
    <div className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project-card"
          >
            <div className="project-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-content">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-description">{project.description}</p>
              <div className="tech-list">
                {project.technology.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
