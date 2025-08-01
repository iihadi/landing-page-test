
'use client';

import { useState, type FC } from 'react';
import type { NavLink } from '../../lib/types';

interface NavigationBarProps {
  navLinks: NavLink[];
}

const NavigationBar: FC<NavigationBarProps> = ({ navLinks }) => {
  // Set the first link as active by default
  const [activeLink, setActiveLink] = useState(navLinks[0]?.text || '');

  return (
    <nav className="flex bg-zinc-900 overflow-x-auto scrollbar-hide">
      <div className="container mx-auto justify-center px-4 flex flex-nowrap space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            onClick={() => setActiveLink(link.text)}
            className={`capitalize text-md py-2 whitespace-nowrap transition-colors duration-200 border-b-4 ${activeLink === link.text
              ? 'font-bold text-white'
              : 'font-semibold text-gray-400 border-transparent hover:text-white'
              }`}
            style={{ borderColor: activeLink === link.text ? link.colour : 'transparent' }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;