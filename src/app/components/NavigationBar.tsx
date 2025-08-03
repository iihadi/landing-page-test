'use client';

import { useState, type FC } from 'react';
import type { NavLink } from '../../lib/types';

interface NavigationBarProps {
  navLinks: NavLink[];
}

const NavigationBar: FC<NavigationBarProps> = ({ navLinks }) => {
  const [activeLink, setActiveLink] = useState(navLinks[0]?.text || '');

  return (
    <nav 
      className="flex justify-center bg-zinc-900 bg-opacity-95 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className="flex flex-nowrap space-x-8 md:space-x-12 px-4">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            onClick={() => setActiveLink(link.text)}
            className={`capitalize text-sm md:text-base py-3 md:py-4 whitespace-nowrap transition-colors duration-200 border-b-4 ${activeLink === link.text
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