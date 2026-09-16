import { about } from '@/portfolio';

const About = () => {
  const { name, role, description } = about;

  return (
    <div className="flex flex-col mt-8 sm:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        <div className="shrink-0">
          <img
            src="https://avatars.githubusercontent.com/agungprsty"
            alt="avatar"
            id="main-avatar"
            className="h-32 w-32 rounded-full border-4 border-fg/10 object-cover shadow-lg dark:border-fg-dark/10"
          />
        </div>
        <div className="flex flex-col">
          {name && (
            <h1>
              <span className="link font-semibold">{name}.</span>
            </h1>
          )}
          {role && <h2 className="mt-2 sm:mt-4">A {role}.</h2>}
        </div>
      </div>

      <div className="mt-6 sm:mt-10 text-[0.95rem] sm:text-[1.1rem] space-y-4">
        {description.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
