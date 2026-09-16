import { about } from '@/portfolio';

const About = () => {
  const { name, role, description } = about;

  return (
    <div className="flex flex-col max-[600px]:items-start mt-12 max-[600px]:mt-8">
      <div className="mb-6">
        <img
          src="https://avatars.githubusercontent.com/agungprsty"
          alt="avatar"
          id="main-avatar"
          className="h-32 w-32 rounded-full border-4 border-fg/10 object-cover shadow-lg dark:border-fg-dark/10"
        />
      </div>
      {name && (
        <h1>
          <span className="link font-semibold">{name}.</span>
        </h1>
      )}

      {role && <h2 className="mt-5">A {role}.</h2>}
      <div className="mt-10 text-[1.1rem] space-y-4">
        {description.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
