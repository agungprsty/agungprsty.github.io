import { Link } from 'react-router-dom';
import { experience } from '@/portfolio';

interface Props {
  limit?: number;
}

const Experience = ({ limit }: Props) => {
  if (!experience.length) return null;

  const displayed = limit ? experience.slice(0, limit) : experience;

  return (
    <section id="experience" className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[1.4rem] font-semibold text-fg-alt dark:text-white">Experience</h2>
        {limit && experience.length > limit && (
          <Link to="/experience" className="text-[0.85rem] text-primary transition-colors hover:text-sky-300">
            View all &rarr;
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {displayed.map((exp) => (
          <div
            key={exp.id}
            className="rounded-xl border border-black/5 bg-black/[0.02] p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <h3 className="mb-1 text-[1rem] font-semibold text-fg-alt dark:text-white">
              {exp.role}
            </h3>
            <div className="mb-1.5 text-[0.8rem] font-medium text-primary">
              {exp.company}
            </div>
            <div className="mb-3 text-[0.75rem] text-fg dark:text-[#666]">
              {exp.period}
            </div>
            {exp.description ? (
              <div className="text-[0.85rem] leading-relaxed text-fg dark:text-[#999]">
                {exp.description}
              </div>
            ) : (
              <ul className="list-outside list-disc pl-4 space-y-1.5 text-[0.85rem] leading-relaxed text-fg dark:text-[#999]">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
