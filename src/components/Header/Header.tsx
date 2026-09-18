import { useEffect, useState } from 'react';
import { header } from '@/portfolio';
import Navbar from '@/components/Navbar/Navbar';

const Header = () => {
  const { homepage, title } = header;
  const [showNavAvatar, setShowNavAvatar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainAvatar = document.getElementById('main-avatar');
      if (mainAvatar) {
        const rect = mainAvatar.getBoundingClientRect();
        setShowNavAvatar(rect.bottom <= 60);
      } else {
        setShowNavAvatar(window.scrollY > 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const AvatarIcon = () => (
    <img 
      src="https://avatars.githubusercontent.com/agungprsty" 
      alt="avatar" 
      className={`rounded-full object-cover transition-all duration-300 origin-left ${showNavAvatar ? 'opacity-100 scale-100 w-8 h-8 mr-2' : 'opacity-0 scale-0 w-0 h-0 overflow-hidden'}`}
    />
  );

  return (
    <header className="sticky top-0 z-50 center mx-auto h-[5em] w-full px-6 md:px-12 justify-between bg-bg/90 backdrop-blur-md dark:bg-bg-dark/90 transition-all duration-300 border-b border-fg/5 dark:border-fg-dark/5">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between font-bold">
        <h3>
          {homepage ? (
          <a href={homepage} className="link flex items-center">
            <AvatarIcon />
            {title}
          </a>
        ) : (
          <div className="flex items-center">
            <AvatarIcon />
            {title}
          </div>
        )}
      </h3>
      <Navbar />
      </div>
    </header>
  );
};

export default Header;
