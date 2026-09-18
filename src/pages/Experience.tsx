import { experience } from '@/portfolio';
import Skills from '@/components/Skills/Skills';

const Experience = () => {
  if (!experience.length) return null;

  return (
    <>
      <Skills />

      <section id="experience-timeline" className="section mt-12">
        <section id="experience-header" className="section mb-6 pb-2 border-b border-black/5">
          <h1 className="mb-2 text-2xl font-bold text-fg-alt dark:text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            Experience
          </h1>
          <p className="text-base text-fg dark:text-[#888] sm:text-lg">
            5+ years of experience in software engineering
          </p>
        </section>

        <div className="flex flex-col">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative pl-6 pb-10 border-l border-black/10 dark:border-white/[0.08] last:pb-0">
              <span
                className="absolute -left-[4px] top-2 h-[7px] w-[7px] rounded-full bg-primary"
                aria-hidden
              />

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <span className="text-[1rem] font-semibold text-fg-alt dark:text-white">
                  {item.role}
                </span>
                <span className="text-[0.8rem] text-fg dark:text-[#666] whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <div className="text-[0.9rem] text-primary mb-2">{item.company}</div>

              {item.description && (
                <div className="text-[0.9rem] leading-relaxed text-fg dark:text-[#999] mb-3">
                  {item.description}
                </div>
              )}

              {item.points.length > 0 && (
                <ul className="space-y-1">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-[0.85rem] leading-relaxed text-fg dark:text-[#888]">
                      <span className="absolute left-0 text-[#555] select-none">&rarr;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
