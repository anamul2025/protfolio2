import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientCarousel from './components/ClientCarousel';
import About from './components/About';
import Education from './components/Education';
import Extracurricular from './components/Extracurricular';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-black transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <ClientCarousel />
      <About />
      <Education />
      <Extracurricular />
      <Projects />
      <Certifications />
      <Publications />
      <Portfolio />
      <Skills />
      <Testimonials />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;