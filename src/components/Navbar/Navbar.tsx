import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Brightness2, WbSunnyRounded } from '@mui/icons-material';
import { ThemeContext } from '@/contexts/theme';

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const { pathname, hash } = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !hash;

    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      return pathname === (path || '/') && hash === `#${anchor}`;
    }

    if (href.startsWith('/')) return pathname.startsWith(href);

    return false;
  };

  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' }
  ];

  return (
    <nav className="flex items-center">
      <ul className="mr-6 flex max-[600px]:mr-3">
        {navItems.map((item) => (
          <li key={item.label} className="ml-6">
            <a
              href={item.href}
              className={`link--nav ${isActive(item.href) ? 'link--nav--active' : ''}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn--icon mt-1.5"
        aria-label="toggle theme">
        {themeName === 'dark' ? <WbSunnyRounded /> : <Brightness2 />}
      </button>
    </nav>
  );
};

export default Navbar;
