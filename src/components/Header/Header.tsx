import { header } from '@/portfolio';
import Navbar from '@/components/Navbar/Navbar';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="center mx-auto h-[8em] w-[95%] max-w-5xl justify-between max-[600px]:h-[6em]">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
