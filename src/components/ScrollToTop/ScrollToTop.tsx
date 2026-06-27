import { useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="fixed bottom-8 right-16 max-[900px]:hidden">
      <a href="#top">
        <ArrowUpward fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
