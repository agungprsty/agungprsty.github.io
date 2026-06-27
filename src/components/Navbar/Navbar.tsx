import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Brightness2, WbSunnyRounded, Home, Folder, Article, Mail } from '@mui/icons-material';
import { ThemeContext } from '@/contexts/theme';
import { projects, contact } from '@/portfolio';

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/')) return pathname.startsWith(href);
    return false;
  };

  const navItems = [
    ...(projects.length ? [{ label: 'Projects', href: '/projects', icon: Folder }] : []),
    { label: 'Notes', href: 'https://medium.com/@agungprsty', icon: Article },
    ...(contact.email ? [{ label: 'Contact', href: '/#contact', icon: Mail }] : [])
  ];

  const linkClass = (href: string) =>
    `relative flex flex-col items-center gap-0.5 transition-colors ${
      isActive(href) ? 'text-primary dark:text-primary-dark' : 'text-fg dark:text-fg-dark'
    }`;

  return (
    <>
      {/* Desktop nav */}
      <nav className="flex items-center max-[600px]:hidden">
        <ul className="mr-6 flex">
          {navItems.map((item) => (
            <li key={item.label} className="ml-6">
              <a href={item.href} className="link--nav">
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

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-20 hidden border-t border-fg/10 bg-bg px-2 pb-2 pt-1 dark:border-fg-dark/10 dark:bg-bg-dark max-[600px]:block">
        <ul className="flex items-center justify-around">
          <li>
            <a href="/" className={linkClass('/')}>
              {isActive('/') && (
                <span className="absolute -top-1 h-0.5 w-5 rounded-full bg-primary dark:bg-primary-dark" />
              )}
              <Home fontSize="small" />
              <span className="text-[0.6rem]">Home</span>
            </a>
          </li>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <a href={item.href} className={linkClass(item.href)}>
                  {active && (
                    <span className="absolute -top-1 h-0.5 w-5 rounded-full bg-primary dark:bg-primary-dark" />
                  )}
                  <Icon fontSize="small" />
                  <span className="text-[0.6rem]">{item.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex flex-col items-center gap-0.5 text-fg dark:text-fg-dark"
              aria-label="toggle theme">
              {themeName === 'dark' ? (
                <WbSunnyRounded fontSize="small" />
              ) : (
                <Brightness2 fontSize="small" />
              )}
              <span className="text-[0.6rem]">{themeName === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
