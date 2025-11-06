import React from 'react';
import { Rocket, User, FolderGit2, Film, Mail } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', Icon: Rocket },
  { href: '#about', label: 'About', Icon: User },
  { href: '#projects', label: 'Projects', Icon: FolderGit2 },
  { href: '#explorations', label: 'Films', Icon: Film },
  { href: '#contact', label: 'Contact', Icon: Mail },
];

const Nav = () => {
  const onClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed inset-x-0 top-5 z-[60] flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-2 py-2 text-sm text-white/80 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.15)]">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => onClick(e, href)}
            className="group flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/10"
            data-magnetic="true"
          >
            <Icon className="h-4 w-4 opacity-80" />
            <span className="hidden sm:inline-block">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
