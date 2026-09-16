import { lazy, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '@/contexts/theme';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import ScrollToTopOnNavigate from '@/components/ScrollToTop/ScrollToTopOnNavigate';
import Footer from '@/components/Footer/Footer';
import Preloader from '@/components/Preloader/Preloader';
import Home from '@/pages/Home';

const Experience = lazy(() => import('@/pages/Experience'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Projects = lazy(() => import('@/components/Projects/Projects'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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

      <main className="mx-auto w-[95%] max-w-5xl max-[600px]:w-full max-[600px]:px-6">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <ScrollToTopOnNavigate />
      <ScrollToTop />
      <Footer />
      <Preloader />
    </div>
  );
};

export default App;
