import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Footer.css';

const Tagline = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <footer className="footer">
    <Tagline>
      Dibuat dengan&nbsp;
      <FavoriteIcon /> &nbsp;di Yogyakarta
    </Tagline>
    <a href="https://github.com/agungprsty" className="link footer__link">
      {new Date().getFullYear()} &copy; agungprasetyo.github.io
    </a>
  </footer>
);

export default Footer;
