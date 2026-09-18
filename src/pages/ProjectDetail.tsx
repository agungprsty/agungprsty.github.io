import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '@/portfolio';

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

  const metaParts = [];
  if (project.period) metaParts.push(project.period);
  if (project.type) metaParts.push(project.type);
  const metaText = metaParts.join(' · ');

  return (
    <section className="section mx-auto mt-12 max-w-3xl px-4">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-[0.9rem] font-medium text-fg-alt transition-colors hover:text-primary dark:text-[#888] dark:hover:text-primary"
        aria-label="go back">
        &larr; Back
      </button>

      {project.img && (
        <div className="mb-8 overflow-hidden rounded-2xl border border-black/5 dark:border-white/[0.08]">
          <img
            src={project.img}
            alt={project.name}
            className="w-full object-cover"
            style={{ maxHeight: '400px' }}
          />
        </div>
      )}

      <div className="mb-10 border-b border-black/5 pb-8 dark:border-white/[0.08]">
        <h1 className="mb-3 flex flex-wrap items-center gap-3 text-[2rem] font-bold leading-tight text-fg-alt dark:text-white sm:text-[2.5rem]">
          {project.name}
          {project.pin && (
            <span className="inline-flex text-primary" aria-label="Pinned project" title="Pinned">
              <svg
                width="22"
                height="22"
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
        </h1>
        {metaText && (
          <div className="text-[0.95rem] font-medium text-fg dark:text-[#666]">
            {metaText}
          </div>
        )}
      </div>

      <div className="mb-10 text-[1.05rem] leading-relaxed text-fg dark:text-[#999] whitespace-pre-wrap">
        {project.description}
      </div>

      {project.stack && (
        <div className="mb-12">
          <h3 className="mb-4 text-[0.85rem] font-semibold uppercase tracking-wider text-fg-alt dark:text-[#888]">
            Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded px-3 py-1 text-[0.8rem] font-medium bg-primary/10 text-primary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.link && (
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-fg-alt px-6 py-3 text-[0.9rem] font-semibold text-bg transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black">
            Visit Project &rarr;
          </a>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
