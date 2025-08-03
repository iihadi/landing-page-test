'use client';

import type { FC } from 'react';
import Image from 'next/image';

interface HeaderProps {
  brandName: string;
  logoUrl: string;
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Header: FC<HeaderProps> = ({ brandName, logoUrl, onLoginClick, onSignUpClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Image
          src={logoUrl}
          alt={`${brandName} logo`}
          width={110}
          height={32}
          className="h-8 w-auto"
        />
        <div className="flex items-center space-x-2">
          <button
            onClick={onLoginClick}
            className="bg-[#00a826] hover:bg-green-70 border border-transparent text-white font-semibold py-1.5 px-6 text-sm rounded transition-colors"
          >
            Login
          </button>
          <button
            onClick={onSignUpClick}
            className="bg-white text-[#00a826] border border-gray-300 hover:bg-gray-200 font-semibold py-1.5 px-6 text-sm rounded transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;