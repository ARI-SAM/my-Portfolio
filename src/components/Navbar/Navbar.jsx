import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <h1 className="logo">Aritra Samanta</h1>

        {/* Hamburger icon */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>HOME</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a></li>  
          <li><a href="#experience" onClick={() => setIsOpen(false)}>EXPERIENCE</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}>RESUME</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}
