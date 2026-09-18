import { Link } from 'react-router-dom';
import type { Project } from '@/types/portfolio';

function ProjectContainer({ project }: { project: Project }) {
  const metaParts = [];
  if (project.period) metaParts.push(project.period);
  if (project.type) metaParts.push(project.type);
  const metaText = metaParts.join(' · ');

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`relative flex h-full flex-col rounded-xl border p-5 transition-all duration-200 hover:-translate-y-[2px] ${project.pin ? 'border-primary/30 bg-primary/[0.04] dark:border-primary/30 dark:bg-primary/[0.06]' : 'border-black/5 bg-black/[0.02] hover:border-primary/30 dark:border-white/[0.08] dark:bg-white/[0.03]'}`}>
      {project.pin && (
        <span
          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white dark:ring-[#0a0a0a]"
          aria-label="Pinned project"
          title="Pinned — Featured project">
          <svg
            width="14"
            height="14"
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
      <h3 className="mb-1.5 pr-6 text-[0.95rem] font-semibold leading-tight text-fg-alt dark:text-white">
        {project.name}
      </h3>
      
      {metaText && (
        <div className="mb-2.5 text-[0.75rem] text-fg dark:text-[#666]">
          {metaText}
        </div>
      )}
      
      <div className="mb-4 flex-grow text-[0.85rem] leading-relaxed text-fg line-clamp-4 dark:text-[#999]">
        {project.description}
      </div>

      {project.stack && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded px-2 py-[0.15rem] text-[0.65rem] font-medium bg-primary/10 text-primary">
              {item}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

export default ProjectContainer;
