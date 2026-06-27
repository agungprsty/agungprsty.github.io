import { useContext, useState } from 'react';
import { Brightness2, WbSunnyRounded, Menu, Close } from '@mui/icons-material';
import { ThemeContext } from '@/contexts/theme';
import { projects, contact } from '@/portfolio';

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="flex items-center">
      <ul
        className={`mr-6 flex max-[600px]:fixed max-[600px]:inset-0 max-[600px]:z-10 max-[600px]:w-full max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center ${
          showNavList ? 'max-[600px]:flex' : 'max-[600px]:hidden'
        }`}>
        {projects.length ? (
          <li className="ml-6 max-[600px]:my-2">
            <a href="#projects" onClick={toggleNavList} className="link--nav">
              Projects
            </a>
          </li>
        ) : null}

        <li className="ml-6 max-[600px]:my-2">
          <a href="https://medium.com/@agungprsty" onClick={toggleNavList} className="link--nav">
            Notes
          </a>
        </li>

        {contact.email ? (
          <li className="ml-6 max-[600px]:my-2">
            <a href="#contact" onClick={toggleNavList} className="link--nav">
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn--icon mt-1.5"
        aria-label="toggle theme">
        {themeName === 'dark' ? <WbSunnyRounded /> : <Brightness2 />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn--icon ml-3 hidden max-[600px]:flex max-[600px]:z-10"
        aria-label="toggle navigation">
        {showNavList ? <Close /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
