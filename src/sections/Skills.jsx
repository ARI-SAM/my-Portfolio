import React from "react";
//import "./Skills.css";

export default function Skills() {
  const skills = [
    "React", "JavaScript", "HTML", "CSS",
    "Node.js", "Express", "MongoDB",
    "Docker", "Git", "CI/CD", "AWS"
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
