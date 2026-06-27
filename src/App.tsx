import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Preloader from '@/components/Preloader/Preloader';

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <div
      id="top"
      className={`${themeName === 'dark' ? 'dark' : ''}`}
      style={{
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.5,
        color: 'var(--clr-fg)',
        backgroundColor: 'var(--clr-bg)'
      }}>
      <Header />

      <main className="mx-auto w-[95%] max-w-5xl">
        <About />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
      <Preloader />
    </div>
  );
};

export default App;
