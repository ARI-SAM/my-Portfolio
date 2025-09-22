import React, { useState } from 'react';
//import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setTimeout(() => {
        document.getElementById(project.id).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div id={project.id} className="project-card" onClick={handleClick}>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <div className={`project-details ${expanded ? 'open' : ''}`}>
        <p>{project.fullDescription}</p>
        <p>Tech: {project.tech.join(', ')}</p>
        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repo</a>}
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
      </div>
    </div>
  );
}
