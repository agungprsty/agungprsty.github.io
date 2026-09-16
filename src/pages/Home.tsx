import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Experience limit={2} />
      <Projects limit={6} />
      <Contact />
    </>
  );
};

export default Home;
