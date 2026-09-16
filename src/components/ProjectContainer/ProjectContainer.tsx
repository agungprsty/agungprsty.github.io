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
      className="flex h-full flex-col rounded-xl border border-black/5 bg-black/[0.02] p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-primary/30 dark:border-white/[0.08] dark:bg-white/[0.03]">
      
      <h3 className="mb-1.5 text-[0.95rem] font-semibold text-fg-alt dark:text-white">
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
