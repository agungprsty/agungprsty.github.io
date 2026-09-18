import { skills } from '@/portfolio';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="section mt-12">
      <h4 className="section__title uppercase mb-5">Skills</h4>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded px-3 py-1 text-[0.75rem] lg:text-[0.95rem] font-medium bg-primary/10 text-primary">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
