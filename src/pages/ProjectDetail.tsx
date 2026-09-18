import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '@/portfolio';
import { getProjectMeta } from '@/utils/project';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-2 text-2xl font-bold">Project not found</h2>
        <p className="mb-6 text-fg-alt dark:text-[#888]">
          The project you requested does not exist.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-primary hover:underline">
          &larr; Back to Home
        </button>
      </div>
    );
  }

  const metaText = getProjectMeta(project);

  return (
    <section className="section mx-auto mt-8 max-w-2xl px-4 sm:mt-10 sm:px-6">
      {project.img && (
        <div className="mb-6 overflow-hidden rounded-xl border border-black/5 dark:border-white/[0.08] sm:mb-7">
          <img
            src={project.img}
            alt={project.name}
            className="w-full object-cover"
            style={{ maxHeight: '320px' }}
          />
        </div>
      )}

      <div className="mb-2 border-b border-black/5 pb-2 dark:border-white/[0.08] sm:mb-4 sm:pb-4">
        <p className="mb-2 flex flex-wrap items-center gap-2 text-[1.15rem] font-semibold leading-snug text-fg-alt dark:text-white sm:text-[1.3rem] lg:text-[1.4rem]">
          {project.name}
          {project.pin && (
            <span className="inline-flex text-primary" aria-label="Pinned project" title="Pinned">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true">
                <line x1="12" y1="17" x2="12" y2="22" />
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
              </svg>
            </span>
          )}
        </p>
        {metaText && (
          <div className="text-[0.78rem] font-medium leading-relaxed text-fg dark:text-[#666] sm:text-[0.82rem]">
            {metaText}
          </div>
        )}
      </div>

      <div className="mb-8 whitespace-pre-wrap text-[0.9rem] leading-[1.75] text-fg dark:text-[#9a9a9a] sm:mb-9 sm:text-[0.93rem]">
        {project.description}
      </div>

      {project.stack && (
        <div className="mb-8 sm:mb-10">
          <h3 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-fg-alt dark:text-[#888] sm:text-[0.72rem]">
            Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded px-2.5 py-1 text-[0.68rem] font-medium bg-primary/10 text-primary sm:text-[0.72rem]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-transparent px-5 py-2.5 text-[0.82rem] font-medium text-fg-alt transition-colors hover:border-black/20 hover:bg-black/[0.03] dark:border-white/15 dark:text-[#aaa] dark:hover:border-white/25 dark:hover:bg-white/[0.06] sm:text-[0.85rem]"
          aria-label="go back">
          &larr; Back
        </button>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-fg-alt px-5 py-2.5 text-[0.82rem] font-semibold text-bg transition-all hover:-translate-y-0.5 hover:opacity-90 dark:bg-white dark:text-black sm:text-[0.85rem]">
            Visit Project &rarr;
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
