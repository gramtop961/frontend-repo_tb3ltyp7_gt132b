import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Brain, PenTool, Film, Figma, Framer, Github, Atom, Wind, Database } from 'lucide-react';

const traits = [
  { icon: Brain, label: 'AI Curiosity' },
  { icon: PenTool, label: 'Design Craft' },
  { icon: Film, label: 'Story Sense' },
];

const tools = [
  { icon: Figma, name: 'Figma' },
  { icon: Framer, name: 'Framer' },
  { icon: Github, name: 'GitHub' },
  { icon: Atom, name: 'React' },
  { icon: Wind, name: 'Tailwind' },
  { icon: Database, name: 'MongoDB' },
  { icon: Sparkles, name: 'AI' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const marqueeRef = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
      section.style.setProperty('--p', String(progress));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Simple JS marquee for tools strip
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let raf;
    let pos = 0;
    const loop = () => {
      pos += 0.5; // px per frame
      el.scrollLeft = pos;
      if (pos >= el.scrollWidth / 2) pos = 0; // seamless loop with duplicated content
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0A0C10] text-white"
      style={{
        background:
          'radial-gradient(600px 400px at calc(20% + var(--p) * 10%) 30%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(700px 500px at 80% 70%, rgba(168,85,247,0.08), transparent 60%)',
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
        {/* Left: 3D/Holographic placeholder using layered cards */}
        <div className="relative">
          <motion.div
            style={{ transform: 'translateZ(0)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="aspect-square w-full rounded-3xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent p-1"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl">
              <div className="absolute inset-0 opacity-50" style={{
                background:
                  'radial-gradient(400px 200px at 30% 20%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(600px 300px at 70% 80%, rgba(139,92,246,0.25), transparent 60%)',
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-cyan-300" />
              </div>
              <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">Holographic Loop</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Narrative */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold sm:text-5xl"
          >
            Where Logic Meets Imagination.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-white/80"
          >
            Designer by craft, technologist by curiosity, storyteller by heart. I shape ideas into interfaces and systems that feel inevitable — weaving narrative with intelligence.
          </motion.p>

          {/* Traits with hover labels */}
          <div className="mt-8 flex flex-wrap gap-3">
            {traits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
                data-magnetic="true"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-[10px] opacity-0 backdrop-blur transition group-hover:opacity-100">
                  authentic and playful
                </span>
              </div>
            ))}
          </div>

          {/* Typewriter keywords */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm text-cyan-300"
          >
            {['AI', 'Design', 'Storytelling', 'Product Thinking'].map((w, i) => (
              <span
                key={w}
                className="animate-typing overflow-hidden whitespace-nowrap border-r border-cyan-300/60 pr-2"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {w}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech & Tools carousel */}
      <div className="mx-auto mt-2 w-full max-w-7xl px-6 pb-20 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-sm uppercase tracking-widest text-white/60">Tech & Tools</span>
            <span className="text-xs text-white/40">hover to pause</span>
          </div>
          <div ref={marqueeRef} className="no-scrollbar flex gap-4 overflow-x-scroll [scrollbar-width:none]" style={{ scrollBehavior: 'auto' }}>
            {/* duplicate row for seamless loop */}
            {[0, 1].map((d) => (
              <div key={d} className="flex min-w-max items-center gap-4 pr-4">
                {tools.map(({ icon: Icon, name }) => (
                  <div key={`${name}-${d}`} className="group/m tool-item relative flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10" data-magnetic="true">
                    <Icon className="h-4 w-4" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
