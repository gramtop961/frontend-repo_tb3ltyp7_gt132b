import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { title: 'CREOS', tag: 'AI Operating System for Designers' },
  { title: 'Enhance-It', tag: 'AI Image Enhancer using Real-ESRGAN' },
  { title: 'Remove-It', tag: 'Smart Background Remover' },
  { title: 'Pair-It & Mood-It', tag: 'AI-driven color & font systems' },
  { title: 'FilmStock', tag: 'Crowd-Investment for Cinema' },
];

const tilt = {
  onMouseMove: (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -(y - rect.height / 2) / 18;
    const ry = (x - rect.width / 2) / 18;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  },
};

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-[#0B0D11] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h3 className="text-3xl font-semibold sm:text-5xl">Creations that Think.</h3>
        <p className="mt-4 max-w-2xl text-white/70">
          A selection of experiments and products where intelligence meets interaction.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setActive(p)}
              {...tilt}
              className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
              data-magnetic="true"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-400/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-white/70">{p.tag}</p>
              </div>
              <div className="mt-8 h-36 w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D11] text-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div>
                  <h5 className="text-xl font-semibold">{active.title}</h5>
                  <p className="text-sm text-white/60">{active.tag}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
                  data-magnetic="true"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                <div className="aspect-video w.full overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                <div className="space-y-3 text-sm text-white/70">
                  <p>
                    A cinematic case study with flows, insights and outcomes. Visuals and diagrams showcase the system thinking behind the product.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Problem framing & narrative</li>
                    <li>System architecture & flows</li>
                    <li>Interactive demos</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
