import React from 'react';
import Navbar from 'D:/PORTFOLIO-MINE/my_portfolio/src/components/Navbar/Navbar.jsx';
import About from './sections/About';
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
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
