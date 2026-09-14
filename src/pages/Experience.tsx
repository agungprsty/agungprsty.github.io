import { Work, CalendarMonth, LocationOn } from '@mui/icons-material';
import { experience } from '@/portfolio';

const Experience = () => {
  if (!experience.length) return null;

  const companies = new Set(experience.map((item) => item.company)).size;
  const achievements = experience.reduce((total, item) => total + item.points.length, 0);

  const stats = [
    { label: 'Roles', value: experience.length },
    { label: 'Companies', value: companies },
    { label: 'Achievements', value: achievements }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>

      <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-bg-alt px-4 py-5 text-center shadow-theme dark:bg-bg-alt-dark dark:shadow-theme-dark">
            <p className="text-2xl font-bold text-primary dark:text-primary-dark sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-fg-alt dark:text-fg-alt-dark sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <ol className="relative mx-auto max-w-3xl">
        <span
          className="absolute bottom-4 left-4 top-2 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-transparent dark:from-primary-dark dark:via-primary-dark/60"
          aria-hidden
        />

        {experience.map((item) => (
          <li key={item.id} className="relative pb-10 pl-14 last:pb-0">
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-theme ring-4 ring-bg dark:bg-primary-dark dark:text-bg-dark dark:ring-bg-dark dark:shadow-theme-dark">
              <Work fontSize="small" />
            </span>

            <div className="rounded-2xl bg-bg-alt p-5 shadow-theme transition-transform duration-200 hover:-translate-y-1 dark:bg-bg-alt-dark dark:shadow-theme-dark sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary-dark/10 dark:text-primary-dark">
                  <CalendarMonth fontSize="inherit" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-bg px-3 py-1 text-xs font-medium text-fg-alt dark:bg-bg dark:text-fg-alt-dark">
                  <LocationOn fontSize="inherit" />
                  {item.location}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.role}</h3>
              <p className="mt-1 font-medium text-primary dark:text-primary-dark">{item.company}</p>

              <ul className="mt-4 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-fg dark:text-fg-dark">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-primary-dark" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
