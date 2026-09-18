import { lazy, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '@/contexts/theme';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import ScrollToTopOnNavigate from '@/components/ScrollToTop/ScrollToTopOnNavigate';
import Footer from '@/components/Footer/Footer';
import Projects from '@/components/Projects/Projects';
import Home from '@/pages/Home';

const Experience = lazy(() => import('@/pages/Experience'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <div
      id="top"
      className={`${
        themeName === 'dark' ? 'dark' : ''
      } bg-bg font-sans text-fg transition-colors duration-300 dark:bg-bg-dark dark:text-fg-dark`}>
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
    </div>
  );
};

export default App;
