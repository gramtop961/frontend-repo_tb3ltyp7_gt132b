import React from 'react';
import { Cpu, Bot, Brain, Sparkles, Atom, Wind, Database, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stack = [
  { Icon: Atom, label: 'React' },
  { Icon: Wind, label: 'Tailwind' },
  { Icon: Brain, label: 'Framer Motion' },
  { Icon: Code2, label: 'Vite' },
  { Icon: Database, label: 'Mongo' },
  { Icon: Bot, label: 'AI' },
  { Icon: Cpu, label: 'Edge' },
  { Icon: Sparkles, label: 'Spline' },
];

const TechTools = () => {
  return (
    <section className="relative bg-[#07090D] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h3 className="text-2xl font-semibold sm:text-4xl">Tech & Tools</h3>
        <p className="mt-2 max-w-2xl text-white/70">A tight toolkit that lets ideas ship fast without sacrificing craft.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {stack.map(({ Icon, label }) => (
            <motion.div
              key={label}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 backdrop-blur transition hover:bg-white/10"
              whileHover={{ y: -4, scale: 1.03 }}
              data-magnetic="true"
            >
              <Icon className="h-6 w-6 text-cyan-300" />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
