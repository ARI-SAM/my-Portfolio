import React from 'react';

export default function About() {
  return (
    <section id="about" className="container"><br/><br/><br/><br/><br/>
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">DevOps Engineer</p>
      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Aritra Samanta, a passionate developer creating beautiful and functional web experiences.</p>
          <p>Skills: React, JavaScript, HTML, CSS, Node.js</p>
        </div>
        <div className="about-image">
          {/* Place your profile image here */}
          <img src="/myphoto.png"  alt="Profile" />
        </div>
      </div>
    </section>
  );
}
