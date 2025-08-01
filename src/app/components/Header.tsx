
'use client';

import type { FC } from 'react';

interface HeaderProps {
  brandName: string;
  logoUrl: string;
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Header: FC<HeaderProps> = ({ brandName, logoUrl, onLoginClick, onSignUpClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-black">
      {/* Top bar with logo and auth buttons */}
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
      <img 
          src={logoUrl} 
          alt={`${brandName} logo`} 
          className="h-8 w-auto"
      />
      <div className="flex items-center space-x-2">
          <button onClick={onLoginClick} className="bg-[#00a826] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors">
          Login
          </button>
          <button onClick={onSignUpClick} className="bg-white text-[#00a826] border border-white hover:bg-gray-200 font-semibold py-2 px-4 rounded-md text-sm transition-colors">
          Sign up
          </button>
      </div>
      </div>
    </header>
  );
};

export default Header;