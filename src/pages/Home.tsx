import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <>
      <About />
      <Projects limit={3} />
      <Contact />
    </>
  );
};

export default Home;
