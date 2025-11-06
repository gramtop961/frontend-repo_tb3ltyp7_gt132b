import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Explorations from './components/Explorations';
import TechTools from './components/TechTools';
import Contact from './components/Contact';

function App() {
  // Magnetic cursor orb
  const orbRef = useRef(null);
  const [hoveringMagnet, setHoveringMagnet] = useState(false);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const enterMagnet = () => setHoveringMagnet(true);
    const leaveMagnet = () => setHoveringMagnet(false);

    const scanMagnetics = () => {
      const mags = document.querySelectorAll('[data-magnetic="true"]');
      mags.forEach((el) => {
        el.addEventListener('mouseenter', enterMagnet);
        el.addEventListener('mouseleave', leaveMagnet);
      });
      return () => {
        mags.forEach((el) => {
          el.removeEventListener('mouseenter', enterMagnet);
          el.removeEventListener('mouseleave', leaveMagnet);
        });
      };
    };

    const cleanupScan = scanMagnetics();

    let raf;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      orb.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0) scale(${hoveringMagnet ? 1.8 : 1})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      cleanupScan && cleanupScan();
    };
  }, [hoveringMagnet]);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Explorations />
      <TechTools />
      <Contact />

      {/* Magnetic cursor orb */}
      <div
        ref={orbRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full mix-blend-screen transition-transform duration-150`}
        style={{
          background: hoveringMagnet
            ? 'radial-gradient(18px 18px at 50% 50%, rgba(34,211,238,0.85), rgba(168,85,247,0.65))'
            : 'radial-gradient(18px 18px at 50% 50%, rgba(34,211,238,0.5), rgba(168,85,247,0.35))',
          boxShadow: hoveringMagnet
            ? '0 0 60px rgba(34,211,238,0.45), 0 0 80px rgba(168,85,247,0.35)'
            : '0 0 30px rgba(34,211,238,0.25)',
          willChange: 'transform',
        }}
      />
    </Layout>
  );
}

export default App;
