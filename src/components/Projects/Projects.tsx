import { projects } from '@/portfolio';
import ProjectContainer from '@/components/ProjectContainer/ProjectContainer';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects mt-12">
      <h2 className="section__title mb-4 text-center uppercase">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
