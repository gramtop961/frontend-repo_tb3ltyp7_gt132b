import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Explorations from './components/Explorations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0D11] text-white">
      <Hero />
      <About />
      <Projects />
      <Explorations />
      <Contact />
    </div>
  );
}

export default App;
