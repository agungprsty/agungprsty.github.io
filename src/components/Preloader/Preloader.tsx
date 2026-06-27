import { useEffect, useRef } from 'react';

const Preloader = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (elRef.current) {
        elRef.current.style.opacity = '0';
      }
    }, 1000);
    const timer2 = setTimeout(() => {
      if (elRef.current) {
        elRef.current.style.display = 'none';
      }
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="fixed left-0 top-0 z-[999999] h-full w-full bg-[#6d8796] bg-center bg-no-repeat opacity-100 transition-opacity duration-1000">
      <div className="absolute left-1/2 top-1/2 z-[33333] -translate-x-1/2 -translate-y-1/2">
        <div className="h-[50px] w-[50px] animate-skrotateplane bg-white/80" />
      </div>
    </div>
  );
};

export default Preloader;
