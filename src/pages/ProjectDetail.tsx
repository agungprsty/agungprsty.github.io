import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '@/portfolio';
import CardMedia from '@mui/material/CardMedia';
import { ArrowBack } from '@mui/icons-material';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4">Project not found</h2>
        <p className="mb-6 text-fg-alt dark:text-fg-alt-dark">
          The project you requested does not exist.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="btn btn--outline inline-flex items-center gap-2">
          <ArrowBack /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <section className="section mx-auto px-4">
      <CardMedia
        component="img"
        height="360"
        image={project.img}
        alt={project.name}
        className="mb-8 rounded-2xl object-cover shadow-theme dark:shadow-theme-dark"
      />

      <h2 className="mb-2">{project.name}</h2>

      {project.stack && (
        <ul className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white dark:bg-primary-dark dark:text-bg-dark">
              {item}
            </li>
          ))}
        </ul>
      )}

      <p className="mb-8 leading-relaxed text-fg dark:text-fg-dark">{project.description}</p>

      <div className="mb-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn--icon flex items-center gap-1 text-fg dark:text-fg-dark hover:text-primary dark:hover:text-primary-dark"
          aria-label="go back">
          <ArrowBack /> <span className="text-sm">Back</span>
        </button>

        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn--outline">
          View Live
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;
