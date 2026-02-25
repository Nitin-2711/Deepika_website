import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
// Sections will be imported here
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Hackathon from './sections/Hackathon';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Hackathon />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
