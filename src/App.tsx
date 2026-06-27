import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '@/contexts/theme';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import ScrollToTopOnNavigate from '@/components/ScrollToTop/ScrollToTopOnNavigate';
import Footer from '@/components/Footer/Footer';
import Preloader from '@/components/Preloader/Preloader';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import Projects from '@/components/Projects/Projects';

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <div
      id="top"
      className={`${themeName === 'dark' ? 'dark' : ''} font-sans`}
      style={{
        lineHeight: 1.5,
        color: 'var(--clr-fg)',
        backgroundColor: 'var(--clr-bg)'
      }}>
      <Header />

      <main className="mx-auto w-[95%] max-w-5xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <ScrollToTopOnNavigate />
      <ScrollToTop />
      <Footer />
      <Preloader />
    </div>
  );
};

export default App;
