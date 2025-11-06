import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 1, caption: 'Narratives meet Neural Networks', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, caption: 'Stories in Motion', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
];

const Explorations = () => {
  return (
    <section id="explorations" className="relative bg-[#080A0E] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_40%,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h3 className="text-3xl font-semibold sm:text-5xl">Stories in Motion.</h3>
          <p className="max-w-md text-white/70">Film, motion, and experimental storytelling. Scroll to shift the background videos and reveal subtle captions.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {videos.map((v) => (
            <motion.div key={v.id} whileHover={{ scale: 1.01 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5" data-magnetic="true">
              <video
                src={v.src}
                className="h-64 w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
                {v.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorations;
