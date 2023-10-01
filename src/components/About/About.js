import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="about">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description}</p>

      <div className="about__contact center">
        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label="github" className="link link--icon">
                <GitHubIcon />
              </a>
            )}

            {social.facebook && (
              <a href={social.facebook} aria-label="facebook" className="link link--icon">
                <FacebookIcon />
              </a>
            )}

            {social.twitter && (
              <a href={social.twitter} aria-label="twitter" className="link link--icon">
                <TwitterIcon />
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link link--icon">
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
