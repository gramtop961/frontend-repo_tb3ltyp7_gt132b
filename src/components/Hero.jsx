import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = null;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const update = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      el.style.setProperty('--px', String(currentX));
      el.style.setProperty('--py', String(currentY));
      raf = requestAnimationFrame(update);
    };

    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[100svh] overflow-hidden bg-[#0B0D11] text-white"
      style={{
        perspective: '1000px',
        '--px': 0,
        '--py': 0,
      }}
    >
      {/* Background glow layers reacting to cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at calc(50% + var(--px) * 120px) calc(60% + var(--py) * 120px), rgba(58, 130, 255, 0.12), transparent 60%), radial-gradient(900px 700px at calc(30% - var(--px) * 100px) calc(30% - var(--py) * 120px), rgba(168, 85, 247, 0.14), transparent 60%)',
          filter: 'saturate(120%)',
        }}
      />

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-white/90">Hello, I’m</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            Rishi Mailoorkar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          I’m a Creative Technologist exploring Design, AI, and Storytelling — blending human imagination with intelligent systems to craft interactive products.
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/10"
          data-magnetic="true"
        >
          <span className="text-sm font-medium">Explore My World</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
