import { Favorite } from '@mui/icons-material';

const Footer = () => (
  <footer className="mt-16 px-0 py-12 pb-8 text-center max-[600px]:mt-12 max-[600px]:px-8 max-[600px]:py-5">
    <span className="flex items-center justify-center">
      Dibuat dengan&nbsp;
      <Favorite /> &nbsp;di Yogyakarta
    </span>
    <a href="https://github.com/agungprsty" className="link text-[0.9rem] font-semibold">
      {new Date().getFullYear()} &copy; agungprasetyo.github.io
    </a>
  </footer>
);

export default Footer;
