import React from 'react';

export default function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">DevOps Engineer</p>
      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Aritra Samanta, a passionate developer creating beautiful and functional web experiences.</p>
          <p>Motivated MCA student with strong foundations in algorithms, data structures, and databases. Passionate
          about AI/ML, cybersecurity. Fast learner, problem-solver, and collaborative
          team player.
          </p>
        </div>
        <div className="about-image">
          {/* Place your profile image here */}
          <img src="/my_photo.png"  alt="Profile" />
        </div>
      </div>
    </section>
  );
}
