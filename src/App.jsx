import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './sections/About';
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div id="home">
      <Navbar />
      <About />
      <Skills />    
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
