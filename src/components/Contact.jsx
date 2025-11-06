import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Palette } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#090B0F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_30%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <h3 className="text-center text-3xl font-semibold sm:text-5xl">Let’s Build Something Thoughtful.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Share your story, challenge, or spark. I’ll get back with ways we can craft something meaningful.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring"
                placeholder="you@domain.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea
                rows="4"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring"
                placeholder="Tell me your story..."
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white/60">
                <Palette className="h-4 w-4" />
                <span className="text-xs">Glassmorphic UI with neon glows</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition hover:bg-cyan-500/20"
                type="button"
                data-magnetic="true"
              >
                Send Message
              </motion.button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10" href="#" aria-label="GitHub" data-magnetic="true"><Github className="h-5 w-5" /></a>
            <a className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10" href="#" aria-label="LinkedIn" data-magnetic="true"><Linkedin className="h-5 w-5" /></a>
            <a className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10" href="#" aria-label="Instagram" data-magnetic="true"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

        <p className="mt-16 text-center text-white/50 italic">“Every pixel is a story. Every idea, a universe.”</p>
      </div>
    </section>
  );
};

export default Contact;
