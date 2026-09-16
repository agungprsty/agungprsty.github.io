import { skills } from '@/portfolio';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="section mt-12">
      <h4 className="section__title uppercase mb-5">Skills</h4>

      <div className="flex flex-col gap-2">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <h3 className="w-48 shrink-0 text-[0.75rem] sm:text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-dark sm:mt-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-fg/10 bg-bg-alt px-3 py-1 sm:px-4 sm:py-1.5 text-[0.75rem] sm:text-[0.85rem] font-medium text-fg-alt shadow-sm transition-colors hover:border-primary/30 dark:border-fg-dark/10 dark:bg-bg-alt-dark dark:text-fg-alt-dark dark:hover:border-primary-dark/30">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
