import { GitHub, LinkedIn, Facebook, Twitter } from '@mui/icons-material';
import { about } from '@/portfolio';

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="flex flex-col max-[600px]:items-start mt-12 max-[600px]:mt-8">
      {name && (
        <h1>
          Hi, I am <span className="link">{name}.</span>
        </h1>
      )}

      {role && <h2 className="mt-5">A {role}.</h2>}
      <p className="mt-10 max-w-[600px] text-[1.1rem]">{description}</p>

      <div className="mt-10 flex items-center max-[600px]:justify-center">
        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label="github" className="link--icon mr-3">
                <GitHub />
              </a>
            )}

            {social.facebook && (
              <a href={social.facebook} aria-label="facebook" className="link--icon mr-3">
                <Facebook />
              </a>
            )}

            {social.twitter && (
              <a href={social.twitter} aria-label="twitter" className="link--icon mr-3">
                <Twitter />
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link--icon mr-3">
                <LinkedIn />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
