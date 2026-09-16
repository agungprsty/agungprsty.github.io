import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/portfolio';
import ProjectContainer from '@/components/ProjectContainer/ProjectContainer';

interface Props {
  limit?: number;
}

const Projects = ({ limit }: Props) => {
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const techOptions = useMemo(() => {
    const unique = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();
    return ['All', ...unique];
  }, []);

  const typeOptions = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.type).filter(Boolean) as string[])).sort();
    return ['All', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchTech = selectedTech === 'All' || project.stack.includes(selectedTech);
      const matchType = selectedType === 'All' || project.type === selectedType;
      return matchTech && matchType;
    });
  }, [selectedTech, selectedType]);

  const displayed = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[1.4rem] font-semibold text-fg-alt dark:text-white">Recent Projects</h2>
        {limit && projects.length > limit && (
          <Link to="/projects" className="text-[0.85rem] text-primary transition-colors hover:text-sky-300">
            View all &rarr;
          </Link>
        )}
      </div>

      {!limit && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium uppercase tracking-wide text-fg-alt dark:text-[#888]">
              Technology
            </label>
            <select
              className="rounded-md border border-black/10 bg-transparent px-3 py-1.5 text-[0.85rem] text-fg outline-none focus:border-primary dark:border-white/10 dark:text-white"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}>
              {techOptions.map((tech) => (
                <option key={tech} value={tech} className="bg-bg dark:bg-bg-dark">
                  {tech}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium uppercase tracking-wide text-fg-alt dark:text-[#888]">
              Project Type
            </label>
            <select
              className="rounded-md border border-black/10 bg-transparent px-3 py-1.5 text-[0.85rem] text-fg outline-none focus:border-primary dark:border-white/10 dark:text-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}>
              {typeOptions.map((type) => (
                <option key={type} value={type} className="bg-bg dark:bg-bg-dark">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
