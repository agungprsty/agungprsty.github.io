import uniqid from 'uniqid';
import CardMedia from '@mui/material/CardMedia';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <a
    href={project.link}
    aria-label="live preview"
    target="_blank"
    className="link project"
    rel="noreferrer">
    <CardMedia component="img" height="180" image={project.img} alt={project.name} />
    <h3 className="project__title">{project.name}</h3>
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
  </a>
);

export default ProjectContainer;
