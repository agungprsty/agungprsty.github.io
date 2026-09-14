import { skills } from '@/portfolio';
import type { SkillLevel } from '@/types/portfolio';

const LEVEL_STYLES: Record<SkillLevel, string> = {
  beginner: 'bg-fg/10 text-fg-alt dark:bg-fg-dark/10 dark:text-fg-alt-dark',
  intermediate: 'bg-primary/10 text-[#17608f] dark:bg-primary-dark/10 dark:text-[#a6b3e0]',
  advanced: 'bg-primary text-white dark:bg-primary-dark dark:text-bg-dark'
};

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl bg-bg-alt p-5 shadow-theme dark:bg-bg-alt-dark dark:shadow-theme-dark">
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-primary dark:text-primary-dark">
              {group.category}
            </h3>

            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-2">
                  <span className="text-sm leading-snug text-fg dark:text-fg-dark">
                    {skill.name}
                  </span>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs capitalize ${
                      LEVEL_STYLES[skill.level]
                    }`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
