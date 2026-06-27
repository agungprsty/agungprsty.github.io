import { Link } from 'react-router-dom';
import { projects } from '@/portfolio';
import ProjectContainer from '@/components/ProjectContainer/ProjectContainer';

interface Props {
  limit?: number;
}

const Projects = ({ limit }: Props) => {
  if (!projects.length) return null;

  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section projects mt-12">
      <h2 className="section__title mb-4 text-center uppercase">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {displayed.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="mt-8 text-center">
          <Link to="/project" className="btn btn--outline inline-block">
            View More
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
