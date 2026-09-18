import { about, contact, resume } from '@/portfolio';
import { GitHub, LinkedIn, Download } from '@mui/icons-material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Medium = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M6.98 19.38c-3.86 0-6.98-3.07-6.98-6.86 0-3.8 3.12-6.87 6.98-6.87 3.86 0 6.98 3.07 6.98 6.87 0 3.79-3.12 6.86-6.98 6.86zm10.74 0c-2.02 0-3.66-3.07-3.66-6.86 0-3.8 1.64-6.87 3.66-6.87 2.02 0 3.66 3.07 3.66 6.87 0 3.79-1.64 6.86-3.66 6.86zm5.12-1.34c-.66 0-1.16-2.48-1.16-5.52 0-3.04.5-5.52 1.16-5.52.65 0 1.16 2.48 1.16 5.52 0 3.04-.51 5.52-1.16 5.52z" />
  </SvgIcon>
);

const XIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </SvgIcon>
);

const Contact = () => {
  if (!contact.email) return null;
  const { social } = about;

  return (
    <section className="section mt-20 flex flex-col items-start" id="contact">
      <h4 className="section__title normal-case tracking-normal !mb-4">Interested in working together?
        <br />
        <a href={`mailto:${contact.email}`} className="text-xl font-semibold link mb-10">
          {contact.email}
        </a>
      </h4>

      <p className="text-lg font-medium text-fg dark:text-fg-dark">Let's connect:</p>
      <div className="flex flex-wrap items-center gap-4">
        {social && (
          <div className="flex items-center">
            {social.github && (
              <a href={social.github} aria-label="github" className="link--icon mr-3">
                <GitHub />
              </a>
            )}
            {social.x && (
              <a href={social.x} aria-label="x" className="link--icon mr-3">
                <XIcon />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link--icon mr-3">
                <LinkedIn />
              </a>
            )}
            {social.medium && (
              <a href={social.medium} aria-label="medium" className="link--icon mr-3">
                <Medium />
              </a>
            )}
          </div>
        )}
        {resume && (
          <a href={resume} download className="btn btn--outline inline-flex items-center gap-2">
            <Download fontSize="small" /> Download Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
