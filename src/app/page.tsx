
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Promotions from './components/Promotions';
import NavigationBar from './components/NavigationBar';
import { getPageData } from '../lib/api';
import type { PageData } from '../lib/types';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

export default function Home() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageData();
      setPageData(data);
    };
    fetchData();
  }, []);

  const openLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  }

  const openSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  }

  if (!pageData) {
    return <div className="bg-black min-h-screen" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header 
        brandName={pageData.brandName} 
        logoUrl={pageData.logoUrl}
        onLoginClick={openLogin}
        onSignUpClick={openSignUp}
      />
      <NavigationBar navLinks={pageData.navLinks} />

      <main 
        className="relative flex-grow bg-cover md:bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${pageData.backgroundUrl}')` }}
      >
        <div className="absolute bottom-0 left-0 right-0">
            <Promotions promotionsData={pageData.promotions} onJoinNowClick={openSignUp} />
        </div>
      </main>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignUp={openSignUp}
      />
      
      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToLogin={openLogin}
      />
    </div>
  );
}