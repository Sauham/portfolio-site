import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-blue-900 to-black min-h-screen text-white bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] bg-cover bg-fixed bg-blend-overlay">
      <SplashCursor />
      <div className="backdrop-blur-sm">
        <Navbar />
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;